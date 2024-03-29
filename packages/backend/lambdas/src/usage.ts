import { DynamoDB } from "aws-sdk";
import axios from "axios";
import { APIGatewayProxyEvent } from "aws-lambda";

export const handler = async function (event: APIGatewayProxyEvent) {
  console.log("event:", JSON.stringify(event, undefined, 2));
  const {
    requestContext: { identity },
    headers,
  } = event;
  const isMe = headers["x-sub"] === "4ea11476-c068-4d2a-a78a-bd5de304ccc1";
  const { sourceIp, userAgent } = identity;
  const response = await axios.get(
    `http://api.ipapi.com/${sourceIp}?access_key=b723852f05a07885c9eca65a2eb56e3e`
  );
  const {
    postal,
    country,
    country_name,
    city,
    latitude,
    longitude,
    region,
    region_code,
    timezone,
    utc_offset,
    continent_code,
  } = response.data;
  let bu_data = {
    bu_region: "",
    bu_city: "",
    bu_latitude: "",
    bu_longitude: "",
  };
  if (!latitude || !longitude) {
    console.log(`Using backup whois for ip: ${sourceIp}`);
    const backupRespo = await axios.get(
      `https://ipwhois.app/json/${sourceIp}\?lang\=en`
    );
    bu_data = backupRespo.data;
  }
  const record = {
    postal: postal || `${country}-${bu_data.bu_region}-${bu_data.bu_city}`,
    country,
    country_name,
    city: city || bu_data.bu_city,
    lat: latitude || bu_data.bu_latitude,
    lng: longitude || bu_data.bu_longitude,
    region,
    region_code,
    timezone,
    utc_offset,
    continent_code,
  };
  const dynamo = new DynamoDB();
  var attributes = DynamoDB.Converter.marshall(record);
  try {
    if (!isMe) {
      console.log("updating usage...");
      await dynamo
        .updateItem({
          TableName: `${process.env.TABLE_NAME}`,
          Key: { pk: { S: "country-usage" }, sk: { S: `${postal}` } },
          UpdateExpression:
            "SET hits = if_not_exists(hits, :num0) + :incr, attributes = :attrs",
          ExpressionAttributeValues: {
            ":num0": { N: "0" },
            ":incr": { N: "1" },
            ":attrs": { M: attributes },
          },
        })
        .promise();
    }
  } catch (err) {
    console.log("ERR", err);
  }

  const { Items } = await dynamo
    .query({
      TableName: `${process.env.TABLE_NAME}`,
      KeyConditionExpression: "pk = :countryUsage",
      ExpressionAttributeValues: {
        ":countryUsage": { S: "country-usage" },
      },
    })
    .promise();
  const globalUsage = Items?.reduce((data: any, I) => {
    const record = DynamoDB.Converter.unmarshall(I);
    const point = {
      ...record.attributes,
      hits: record.hits,
    };
    return {
      points: (data.points || []).concat([point]),
      max: data.max?.hits >= point.hits ? data.max : point,
      min: data.min?.hits <= point.hits ? data.min : point,
    };
  }, {});
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
    },
    body: JSON.stringify({
      current: { userAgent, sourceIp, ...response.data },
      global: globalUsage,
    }),
  };
};

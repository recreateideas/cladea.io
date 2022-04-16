import { DynamoDB } from "aws-sdk";
import axios from "axios";
import { APIGatewayProxyEvent } from "aws-lambda";

export const handler = async function (event: APIGatewayProxyEvent) {
  console.log("event:", JSON.stringify(event, undefined, 2));
  const {
    requestContext: { identity },
  } = event;
  const { sourceIp, userAgent } = identity;
  const response = await axios.get(`https://ipapi.co/${sourceIp}/json/`);
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
  const record = {
    postal,
    country,
    country_name,
    city,
    lat: latitude,
    lng: longitude,
    region,
    region_code,
    timezone,
    utc_offset,
    continent_code,
  };
  const dynamo = new DynamoDB();
  var attributes = DynamoDB.Converter.marshall(record);
  try {
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
      max: data.max > record.hits ? data.max : point,
      min: data.min < record.hits ? data.min : point,
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

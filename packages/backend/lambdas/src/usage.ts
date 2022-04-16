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
  console.log({ userAgent, data: response.data });
  const { postal } = response.data;
  // create AWS SDK clients
  const dynamo = new DynamoDB();
  try {
    await dynamo
      .updateItem({
        TableName: `${process.env.TABLE_NAME}`,
        Key: { pk: { S: `usage#${postal}` } },
        UpdateExpression: "ADD hits :incr",
        ExpressionAttributeValues: { ":incr": { N: "1" } },
      })
      .promise();
  } catch (err) {
    console.log(err);
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
    },
    body: JSON.stringify({
      current: { userAgent, ...response.data },
      global: {},
    }),
  };
};

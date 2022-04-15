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
  // create AWS SDK clients
  // const dynamo = new DynamoDB();

  // update dynamo entry for "path" with hits++
  // await dynamo
  //   .updateItem({
  //     TableName: `${process.env.HITS_TABLE_NAME}`,
  //     Key: { path: { S: event.path } },
  //     UpdateExpression: "ADD hits :incr",
  //     ExpressionAttributeValues: { ":incr": { N: "1" } },
  //   })
  //   .promise();

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(response.data),
  };
};

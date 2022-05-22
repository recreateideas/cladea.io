import { CognitoIdentityServiceProvider } from "aws-sdk";
import axios from "axios";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyEventPathParameters,
} from "aws-lambda";

export const handler = async function (event: APIGatewayProxyEvent) {
  console.log("event:", JSON.stringify(event, undefined, 2));
  const { headers, pathParameters } = event;
  const username = (pathParameters as APIGatewayProxyEventPathParameters)
    .code as string;
  const token = headers["x-access-token"];
  const params = {
    AccessToken: token as string,
  };
  console.log(params);
  const cognitoISP = new CognitoIdentityServiceProvider();
  const user = await cognitoISP.getUser(params).promise();
  console.log({ username, user });
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
    },
    body: JSON.stringify({
      user: {},
    }),
  };
};

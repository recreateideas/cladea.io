#!/usr/bin/env node
require("dotenv").config();
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import CladeaWebsite from "../lib/frontend";
import CladeaApis from "../lib/backend/cladea-apis";
import UserPool from "../lib/backend/user-pool";

const app = new cdk.App();

const stackName = `${app.node.tryGetContext(
  "projectName"
)}-${app.node.tryGetContext("branchName")}`;

const userPoolStackName = `${stackName}-userpool`;
const apisStackName = `${stackName}-api`;
const websiteStackName = `${stackName}-website`;
const env = {
  account: process.env.AWS_ACCOUNT || "880070132485",
  region: process.env.AWS_REGION || "ap-southeast-2",
};
const userPool = new UserPool(app, userPoolStackName, {
  env,
});

const apis = new CladeaApis(app, apisStackName, { env, userPool });

new CladeaWebsite(app, websiteStackName, {
  apiGatewayUrl: apis.url,
  env,
});

export const stackNames = {
  apis: apisStackName,
  websire: websiteStackName,
};

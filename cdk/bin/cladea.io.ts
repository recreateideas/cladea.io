#!/usr/bin/env node
require("dotenv").config();
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import CladeaWebsite from "../lib/frontend";
import CladeaApis from "../lib/backend/cladea-apis";

const app = new cdk.App();

const stackName = `${app.node.tryGetContext(
  "projectName"
)}-${app.node.tryGetContext("branchName")}`;

const apisStackName = `${stackName}-api`;
const websiteStackName = `${stackName}-website`;

const apis = new CladeaApis(app, apisStackName);

new CladeaWebsite(app, websiteStackName, {
  apiGatewayUrl: apis.url,
  env: {
    account: process.env.AWS_ACCOUNT || "880070132485",
    region: process.env.AWS_REGION || "ap-southeast-2",
  },
});

export const stackNames = {
  apis: apisStackName,
  websire: websiteStackName,
};

#!/usr/bin/env node
require("dotenv").config();
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import Website from "../lib/website";

const app = new cdk.App();

const stackName = `${app.node.tryGetContext(
  "projectName"
)}-${app.node.tryGetContext("branchName")}`;

new Website(app, stackName, {
  env: {
    account: process.env.AWS_ACCOUNT || "880070132485",
    region: process.env.AWS_REGION || "ap-southeast-2",
  },
});

#!/usr/bin/env node
import {
  CloudFormationClient,
  DescribeStacksCommand,
} from "@aws-sdk/client-cloudformation";
import * as AWS from "aws-sdk";
import fs from "fs-extra";
import path from "path";
import { whitelist } from "./env-whitelist";

(async () => {
  try {
    var credentials = new AWS.SharedIniFileCredentials({
      profile: "website",
    });
    const client = new CloudFormationClient({
      region: process.env.AWS_REGION,
      credentials,
    });

    const [, , stackName] = process.argv;
    const describeStacks = new DescribeStacksCommand({
      StackName: stackName,
    });
    const response = await client.send(describeStacks);
    const stack = response.Stacks?.find(
      (stack) => stack.StackName === stackName
    );
    if (stack) {
      const variablesEnvFile = (stack.Outputs || [])
        .filter(
          ({ OutputKey }) =>
            OutputKey && whitelist.find((w) => w.key === OutputKey)
        )
        .reduce(
          (acc, { OutputKey, OutputValue }) =>
            acc +
            `export ${String(
              whitelist.find((w) => w.key === OutputKey)?.envName
            )}=${String(OutputValue)};\n`,
          ""
        );
      fs.writeFileSync(
        path.resolve(__dirname, `../../.stack.${stackName}.env`),
        variablesEnvFile
      );
    }
  } catch (err) {
    console.log(err);
  }
})();

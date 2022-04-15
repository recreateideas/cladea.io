#!/usr/bin/env node
import {
  CloudFormationClient,
  DescribeStacksCommand,
} from "@aws-sdk/client-cloudformation";
import * as AWS from "aws-sdk";

const whitelist = [{ key: "apiGatewayUrl", envName: "API_GATEWAY_URL" }];

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
      const variables = (stack.Outputs || [])
        .filter(
          ({ OutputKey }) =>
            OutputKey && whitelist.find((w) => w.key === OutputKey)
        )
        .reduce(
          (acc, { OutputKey, OutputValue }) => ({
            ...acc,
            [String(whitelist.find((w) => w.key === OutputKey)?.envName)]:
              String(OutputValue),
          }),
          {} as Record<string, string>
        );
      process.env = {
        ...process.env,
        ...variables,
      };
      console.log(process.env);
    }
  } catch (err) {
    console.log(err);
    /* NOOP */
  }
})();

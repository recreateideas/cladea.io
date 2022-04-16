import { CfnOutput, StackProps, Stack, RemovalPolicy } from "aws-cdk-lib";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import { Construct } from "constructs";
import path from "path";
import { getBranchName } from "../helpers";
import { ApiGateway } from "./shared/api-gateway";
import { Lambda } from "./shared";

export default class Apis extends Stack {
  public readonly url: string;
  public readonly table: dynamodb.Table;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, {
      ...props,
    });
    /**
     * Exit here if not master branch
     */
    if (getBranchName(scope) !== "master") return;

    const apiGateway = new ApiGateway(this, "apiGateway");
    const oneTable = new dynamodb.Table(this, "OneTable", {
      partitionKey: { name: "pk", type: dynamodb.AttributeType.STRING },
      sortKey: { name: "sk", type: dynamodb.AttributeType.STRING },
    });

    const usage = new Lambda(this, "siteUsage", {
      entry: path.join(
        __dirname,
        `/../../../packages/backend/lambdas/src/usage.ts`
      ),
      environment: {
        TABLE_NAME: oneTable.tableName,
      },
    });

    oneTable.grantReadWriteData(usage.handler);
    apiGateway.addIntegration("GET", `/v1/usage`, usage.handler);

    new CfnOutput(this, "apiGatewayUrl", {
      value: apiGateway.url,
      description: "deployed url of the api gateway",
      exportName: "apiGatewayUrl",
    });

    this.url = apiGateway.url;
    this.table = oneTable;
  }
}

// https://mfcqmhxfe7.execute-api.ap-southeast-2.amazonaws.com/prod/

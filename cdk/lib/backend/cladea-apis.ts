import { CfnOutput, StackProps, Stack } from "aws-cdk-lib";
import { Construct } from "constructs";
import path from "path";
import { getBranchName } from "../helpers";
import { ApiGateway } from "./shared/api-gateway";
import { Lambda } from "./shared";

export default class Apis extends Stack {
  public readonly url: string = "";
  // public readonly table: dynamodb.Table;
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, {
      ...props,
    });
    /**
     * Exit here if not master branch
     */
    if (getBranchName(scope) !== "master") return;

    const apiGateway = new ApiGateway(this, "apiGateway");
    const usage = new Lambda(this, "site-usage", {
      entry: path.join(
        __dirname,
        `/../../../packages/backend/lambdas/src/usage.ts`
      ),
    });
    apiGateway.addIntegration("GET", `/v1/usage`, usage.handler);

    this.url = apiGateway.url;

    new CfnOutput(this, "apiGatewayUrl", {
      value: apiGateway.url,
      description: "deployed url of the api gateway",
      exportName: "apiGatewayUrl",
    });
    // const table = new dynamodb.Table(this, "SiteViews", {
    //   partitionKey: { name: "path", type: dynamodb.AttributeType.STRING },
    // });

    // this.table = table;

    // grant the lambda role read/write permissions to our table
    // table.grantReadWriteData(this.handler);
  }
}

// https://mfcqmhxfe7.execute-api.ap-southeast-2.amazonaws.com/prod/

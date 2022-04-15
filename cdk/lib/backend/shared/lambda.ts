import * as lambda from "aws-cdk-lib/aws-lambda";
import {
  NodejsFunction,
  NodejsFunctionProps,
} from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";

export class Lambda extends Construct {
  public readonly handler: lambda.Function;

  constructor(scope: Construct, id: string, props: NodejsFunctionProps) {
    super(scope, id);
    this.handler = new NodejsFunction(this, "SiteViewsHandler", {
      runtime: props.runtime || lambda.Runtime.NODEJS_14_X,
      entry: props.entry,
      handler: props.handler || "handler",
    });
  }
}

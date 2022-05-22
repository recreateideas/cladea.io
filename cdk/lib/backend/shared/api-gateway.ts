import { StackProps } from "aws-cdk-lib";
import { RestApi, LambdaIntegration, Cors } from "aws-cdk-lib/aws-apigateway";
import { IFunction } from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";

export class ApiGateway extends RestApi {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, {
      ...props,
      defaultCorsPreflightOptions: {
        allowOrigins: Cors.ALL_ORIGINS,
        allowMethods: Cors.ALL_METHODS,
        allowHeaders: ["Content-Type", "x-access-token"],
      },
    });
  }

  addIntegration(method: string, path: string, lambda: IFunction) {
    const resource = this.root.resourceForPath(path);
    resource.addMethod(method, new LambdaIntegration(lambda));
  }
}

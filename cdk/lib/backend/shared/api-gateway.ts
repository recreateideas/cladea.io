import { StackProps } from "aws-cdk-lib";
import { RestApi, LambdaIntegration } from "aws-cdk-lib/aws-apigateway";
import { IFunction } from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";

export class ApiGateway extends RestApi {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, {
      ...props,
    });
  }

  addIntegration(method: string, path: string, lambda: IFunction) {
    const ressource = this.root.resourceForPath(path);
    ressource.addMethod(method, new LambdaIntegration(lambda));
  }
}

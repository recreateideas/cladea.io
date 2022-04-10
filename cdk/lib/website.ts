import { StackProps, Stack } from "aws-cdk-lib";
import {
  CloudFrontWebDistribution,
  OriginAccessIdentity,
} from "aws-cdk-lib/aws-cloudfront";
import { BlockPublicAccess, Bucket } from "aws-cdk-lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import { Construct } from "constructs";
import * as path from "path";
import { getBranchName } from "./helpers";

export default class Website extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, {
      ...props,
    });

    /**
     * Exit here if not master branch
     */
    if (getBranchName(scope) !== "master") return;

    // Host static site
    const s3BucketSource = new Bucket(this, "website-bucket", {
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
    });

    const originAccessIdentity = new OriginAccessIdentity(
      this,
      "CloudfrontAccess"
    );
    s3BucketSource.grantRead(originAccessIdentity);

    const distribution = new CloudFrontWebDistribution(this, "Distribution", {
      viewerCertificate: {
        props: {
          acmCertificateArn: `arn:aws:acm:us-east-1:${process.env.AWS_ACCOUNT}:certificate/${process.env.AWS_CERTIFICATE_ID}`,
          sslSupportMethod: "sni-only",
        },
        aliases: ["www.cladea.io"],
      },
      errorConfigurations: [
        {
          errorCode: 403,
          responseCode: 200,
          responsePagePath: "/index.html",
        },
        {
          errorCode: 404,
          responseCode: 200,
          responsePagePath: "/index.html",
        },
      ],
      originConfigs: [
        {
          behaviors: [
            {
              isDefaultBehavior: true,
            },
          ],
          s3OriginSource: {
            originAccessIdentity,
            s3BucketSource,
          },
        },
      ],
    });

    new BucketDeployment(this, "WebsiteBucketDeployment", {
      destinationBucket: s3BucketSource,
      sources: [
        Source.asset(
          path.resolve(__dirname, "../../packages/frontend/website/build")
        ),
      ],
      distribution,
    });
  }
}

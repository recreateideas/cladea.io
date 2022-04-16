import { StackProps, Stack, RemovalPolicy } from "aws-cdk-lib";
import {
  CloudFrontWebDistribution,
  OriginAccessIdentity,
} from "aws-cdk-lib/aws-cloudfront";
import { BlockPublicAccess, Bucket } from "aws-cdk-lib/aws-s3";
import { Certificate } from "aws-cdk-lib/aws-certificatemanager";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import { Construct } from "constructs";
import * as path from "path";
import { getBranchName } from "./helpers";

interface Props extends StackProps {
  apiGatewayUrl: string;
}

export default class CladeaWebsite extends Stack {
  constructor(scope: Construct, id: string, props: Props) {
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
      removalPolicy: RemovalPolicy.DESTROY,
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

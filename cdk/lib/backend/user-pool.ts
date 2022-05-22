import * as cognito from "aws-cdk-lib/aws-cognito";
import * as cdk from "aws-cdk-lib";
import secrets from "../../../client_secret_google.json";
import { ProviderAttribute } from "aws-cdk-lib/aws-cognito";
import { Duration } from "aws-cdk-lib";

export default class UserPool extends cdk.Stack {
  public userPoolId: string;
  public userPoolClientId: string;

  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // User Pool
    const userPool = new cognito.UserPool(this, "userpool", {
      userPoolName: "cladea-userpool",
      selfSignUpEnabled: true,
      signInAliases: {
        email: true,
      },
      autoVerify: {
        email: true,
      },
      standardAttributes: {
        givenName: {
          required: true,
          mutable: true,
        },
        familyName: {
          required: true,
          mutable: true,
        },
      },
      customAttributes: {
        country: new cognito.StringAttribute({ mutable: true }),
        isAdmin: new cognito.StringAttribute({ mutable: true }),
      },
      passwordPolicy: {
        minLength: 6,
        requireLowercase: true,
        requireDigits: true,
        requireUppercase: false,
        requireSymbols: false,
      },
      accountRecovery: cognito.AccountRecovery.EMAIL_ONLY,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    const uniquePrefix = "cladea-io";
    const userPoolDomain = userPool.addDomain("default", {
      cognitoDomain: {
        domainPrefix: uniquePrefix,
      },
    });

    const googleProvider = new cognito.UserPoolIdentityProviderGoogle(
      this,
      "CladeaGoogleIDP",
      {
        clientId: secrets.web.client_id,
        clientSecret: secrets.web.client_secret,
        userPool,
        attributeMapping: {
          email: ProviderAttribute.GOOGLE_EMAIL,
          profilePicture: ProviderAttribute.GOOGLE_PICTURE,
          givenName: ProviderAttribute.GOOGLE_GIVEN_NAME,
          familyName: ProviderAttribute.GOOGLE_FAMILY_NAME,
        },
        scopes: ["openid", "email", "profile"],
      }
    );

    // User Pool Client attributes
    const standardCognitoAttributes = {
      givenName: true,
      familyName: true,
      email: true,
      emailVerified: true,
      phoneNumber: true,
      phoneNumberVerified: true,
      profilePicture: true,
      timezone: true,
    };

    const clientReadAttributes = new cognito.ClientAttributes()
      .withStandardAttributes(standardCognitoAttributes)
      .withCustomAttributes(...["country", "isAdmin"]);

    const clientWriteAttributes = new cognito.ClientAttributes()
      .withStandardAttributes({
        ...standardCognitoAttributes,
        emailVerified: false,
        phoneNumberVerified: false,
      })
      .withCustomAttributes(...["country"]);

    // User Pool Client
    const userPoolClient = new cognito.UserPoolClient(this, "userpool-client", {
      userPoolClientName: "cladea-userpool-client",
      userPool,
      authFlows: {
        adminUserPassword: true,
        custom: true,
        userSrp: true,
      },
      refreshTokenValidity: Duration.days(3650),
      oAuth: {
        callbackUrls: ["https://www.cladea.io/sso"],
      },
      generateSecret: true,
      supportedIdentityProviders: [
        cognito.UserPoolClientIdentityProvider.COGNITO,
        cognito.UserPoolClientIdentityProvider.GOOGLE,
      ],
      readAttributes: clientReadAttributes,
      writeAttributes: clientWriteAttributes,
    });

    userPoolClient.node.addDependency(googleProvider);

    this.userPoolId = userPool.userPoolId;
    this.userPoolClientId = userPoolClient.userPoolClientId;
    // Outputs
    new cdk.CfnOutput(this, "userPoolId", {
      value: userPool.userPoolId,
    });
    new cdk.CfnOutput(this, "userPoolUIUrl", {
      value: userPoolDomain.baseUrl(),
    });
    new cdk.CfnOutput(this, "userPoolClientId", {
      value: userPoolClient.userPoolClientId,
    });
  }
}

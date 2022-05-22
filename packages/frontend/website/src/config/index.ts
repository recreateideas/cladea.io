export interface AppConfig {
  apiGatewaUrl: string;
  userpoolClientId: string;
  userpoolSecret: string;
  cognitoUrl: string;
}

export const appConfig: AppConfig = {
  apiGatewaUrl: `${process.env.REACT_APP_API_GATEWAY_URL}`,
  userpoolClientId: `${process.env.REACT_APP_USERPOOL_CLIENT_ID}`,
  userpoolSecret: `${process.env.REACT_APP_USERPOOL_SECRET}`,
  cognitoUrl: `${process.env.REACT_APP_COGNITO_URL}`,
};

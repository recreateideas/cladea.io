export type AuthActionTypes = Record<string, string>;

export interface DecodedToken {
  sub: string;
  "cognito:groups": string[];
  iss: string;
  version: number;
  client_id: string;
  token_use: string;
  scope: string;
  auth_time: number;
  exp: number;
  iat: number;
  jti: string;
  username: string;
}

export interface DecodedIdToken extends DecodedToken {
  email: string;
  given_name: string;
  family_name: string;
  picture: string;
}

export interface TokenDataLs {
  refresh_token: string;
  access_token: string;
  expTime: number;
}

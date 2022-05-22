import { Dispatch } from "redux";
import types from "./types";
import { appConfig } from "src/config";
import jwt from "jwt-decode";
import {
  fetcher,
  IFetcherConfig,
  RequestError,
  RequestResponse,
} from "src/redux/modules";
import { saveToLS } from "src/common";
import qs from "qs";

interface DecodedToken {
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

interface DecodedIdToken extends DecodedToken {
  email: string;
  given_name: string;
  family_name: string;
  picture: string;
}
export const exchangeCodeForTokens =
  (code: string) => async (dispatch: Dispatch) => {
    dispatch({ type: types.EXCHANGE_CODE_FOR_TOKENS_PENDING });
    console.log(code);
    const config = {
      url: `${appConfig.cognitoUrl}/oauth2/token`,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      auth: {
        username: appConfig.userpoolClientId,
        password: appConfig.userpoolSecret,
      },
      data: qs.stringify({
        grant_type: "authorization_code",
        code,
        client_id: appConfig.userpoolClientId,
        client_secret: appConfig.userpoolSecret,
        redirect_uri: "https://www.cladea.io/sso",
      }),
      errorHandler: (error: RequestError) => {
        dispatch({
          type: types.EXCHANGE_CODE_FOR_TOKENS_ERROR,
          data: { error },
        });
      },
      responseHandler: (response: RequestResponse) => {
        const { data: tokenData } = response;
        const idTokenData: DecodedIdToken = jwt(tokenData.id_token);
        const userData = {
          firstName: idTokenData.given_name,
          lastName: idTokenData.family_name,
          imageUrl: idTokenData.picture,
          email: idTokenData.email,
          userId: idTokenData.sub,
        };
        const tkn = {
          ...tokenData,
          expTime: +new Date() / 1000 + tokenData.expires_in,
        };
        saveToLS("usr", userData);
        saveToLS("tkn", tkn);
        dispatch({
          type: types.EXCHANGE_CODE_FOR_TOKENS_SUCCESS,
          data: { tokenData },
        });
      },
    } as IFetcherConfig;
    await fetcher(config);
    return;
  };

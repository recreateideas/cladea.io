import { Dispatch } from "redux";
import types from "./types";
import * as appConfig from "src/config";
import jwt from "jwt-decode";
import {
  fetcher,
  IFetcherConfig,
  RequestError,
  RequestResponse,
} from "src/redux/modules";
import { saveToLS } from "src/common";

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
export const exchangeTokenForUserAttributes =
  (token: string) => async (dispatch: Dispatch) => {
    dispatch({ type: types.EXCHANGE_TOKEN_FOR_USER_DETAILS_PENDING });
    const user: DecodedToken = jwt(token);
    const config = {
      url: `${appConfig.apiGatewaUrl}/v1/cognito/${user.username}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
      errorHandler: (error: RequestError) => {
        dispatch({
          type: types.EXCHANGE_TOKEN_FOR_USER_DETAILS_ERROR,
          data: { error },
        });
      },
      responseHandler: (response: RequestResponse) => {
        const { data: tokenData } = response;
        dispatch({
          type: types.EXCHANGE_TOKEN_FOR_USER_DETAILS_SUCCESS,
          data: { tokenData },
        });
      },
    } as IFetcherConfig;
    await fetcher(config);
    return;
  };

export const saveUserData = (idToken: string) => async (dispatch: Dispatch) => {
  dispatch({ type: types.EXCHANGE_TOKEN_FOR_USER_DETAILS_PENDING });
  const tokenData: DecodedIdToken = jwt(idToken);
  const userData = {
    firstName: tokenData.given_name,
    lastName: tokenData.family_name,
    imageUrl: tokenData.picture,
    email: tokenData.email,
    userId: tokenData.sub,
  };
  const { exp } = tokenData;
  const now = +new Date() / 1000;
  const stillValidForMinutes = (exp - now) / 60;
  if (stillValidForMinutes < 5) {
    console.log("refresh");
  }
  saveToLS("usr", JSON.stringify({ userData, exp }));
  dispatch({
    type: types.SAVE_USER_DATA,
    data: { userData },
  });
};

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
import { User, DecodedIdToken, TokenDataLs } from "src/redux/models";

export const setUserData = (userData: User) => async (dispatch: Dispatch) => {
  dispatch({
    type: types.SET_USER_DATA,
    data: { userData },
  });
};

export const exchangeCodeForTokens =
  (code: string) => async (dispatch: Dispatch) => {
    dispatch({ type: types.EXCHANGE_CODE_FOR_TOKENS_PENDING });
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
          refresh_token: tokenData.refresh_token,
          access_token: tokenData.access_token,
          expTime: +new Date() + tokenData.expires_in * 1000,
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

export const refreshToken =
  (tokenData: TokenDataLs) => async (dispatch: Dispatch) => {
    dispatch({ type: types.REFRESH_TOKEN_PENDING });
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
        grant_type: "refresh_token",
        refresh_token: tokenData.refresh_token,
        client_id: appConfig.userpoolClientId,
        client_secret: appConfig.userpoolSecret,
      }),
      errorHandler: (error: RequestError) => {
        dispatch({
          type: types.REFRESH_TOKEN_ERROR,
          data: { error },
        });
      },
      responseHandler: (response: RequestResponse) => {
        const { data: newTokenData } = response;
        const idTokenData: DecodedIdToken = jwt(newTokenData.id_token);
        const userData = {
          firstName: idTokenData.given_name,
          lastName: idTokenData.family_name,
          imageUrl: idTokenData.picture,
          email: idTokenData.email,
          userId: idTokenData.sub,
        };
        const tkn = {
          refresh_token: tokenData.refresh_token,
          access_token: newTokenData.access_token,
          expTime: +new Date() + newTokenData.expires_in * 1000,
        };
        saveToLS("usr", userData);
        saveToLS("tkn", tkn);
        dispatch({
          type: types.REFRESH_TOKEN_SUCCESS,
          data: { tokenData },
        });
      },
    } as IFetcherConfig;
    await fetcher(config);
    return;
  };

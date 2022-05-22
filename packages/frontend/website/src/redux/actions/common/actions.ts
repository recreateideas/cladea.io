import { Dispatch } from "redux";
import types from "./types";
import { appConfig } from "src/config";
import {
  fetcher,
  IFetcherConfig,
  RequestError,
  RequestResponse,
} from "src/redux/modules";
import { IReduxStore } from "src/redux/models";

export const setIsDev = {
  type: types.SET_IS_DEV,
  data: { isDev: process.env.NODE_ENV === "development" },
};

export const makeUseRequest =
  () => async (dispatch: Dispatch, getState: () => IReduxStore) => {
    dispatch({ type: types.USAGE_REQUEST_PENDING });
    const {
      appState: {
        auth: { user },
      },
    } = getState();
    const headers = user
      ? {
          "x-sub": user?.userId,
        }
      : undefined;
    const config = {
      url: `${appConfig.apiGatewaUrl}/v1/usage`,
      method: "GET",
      headers,
      errorHandler: (error: RequestError) => {
        dispatch({
          type: types.USAGE_REQUEST_ERROR,
          data: { error },
        });
      },
      responseHandler: (response: RequestResponse) => {
        const { data: usageData } = response;
        dispatch({
          type: types.USAGE_REQUEST_SUCCESS,
          data: { usageData },
        });
      },
    } as IFetcherConfig;
    return fetcher(config);
  };

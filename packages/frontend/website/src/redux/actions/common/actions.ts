import { Dispatch } from "redux";
import types from "./types";
import { appConfig } from "src/config";
import {
  fetcher,
  IFetcherConfig,
  RequestError,
  RequestResponse,
} from "src/redux/modules";

export const setIsDev = {
  type: types.SET_IS_DEV,
  data: { isDev: process.env.NODE_ENV === "development" },
};

export const makeUseRequest = () => async (dispatch: Dispatch) => {
  dispatch({ type: types.USAGE_REQUEST_PENDING });
  const config = {
    url: `${appConfig.apiGatewaUrl}/v1/usage`,
    method: "GET",
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

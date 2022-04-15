import { AxiosError, AxiosResponse } from "axios";

export interface IHandlerResponse {
  status: number | void;
  data: string | void;
}

export type ErrorHandler = (
  err: AxiosError | unknown
) => IHandlerResponse | undefined;

export type ResponseHandler = (err: AxiosResponse) => IHandlerResponse;

export type RequestError = AxiosError;
export type RequestResponse = AxiosResponse;

const errorHandler = (err: AxiosError): IHandlerResponse => {
  return {
    status: err.response?.status,
    data: err.response?.data,
  };
};

const responseHandler = (res: AxiosResponse): IHandlerResponse => {
  return {
    status: res.status,
    data: res.data,
  };
};

export { errorHandler, responseHandler };

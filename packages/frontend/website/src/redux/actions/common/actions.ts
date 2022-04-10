import types from "./types";

export const setIsDev = {
  type: types.SET_IS_DEV,
  data: { isDev: process.env.NODE_ENV === "development" },
};

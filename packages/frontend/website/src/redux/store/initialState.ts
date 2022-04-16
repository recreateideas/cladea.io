import { AppState } from "src/redux/models";

export const initialState: AppState = {
  common: {
    toggles: {},
    usageData: {
      current: {},
      global: {},
    },
  },
  theme: {
    mode: "dark",
    userAgent: undefined,
  },
};

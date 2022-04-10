import { AppState } from "src/redux/models";

export const initialState: AppState = {
  common: {
    toggles: {},
  },
  theme: {
    mode: "light",
    userAgent: undefined,
  },
};

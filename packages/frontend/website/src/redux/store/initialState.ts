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
    breakpoints: {
      lg: 1366,
      md: 768,
      sm: 600,
    },
    margins: {
      lg: 160,
      md: 48,
      sm: 4,
    },
  },
};

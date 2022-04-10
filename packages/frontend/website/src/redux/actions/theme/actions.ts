import { UserAgent } from "src/redux";
import { ThemeMode } from "src/app/ui-core";
import types from "./types";
import { saveToLS } from "../../../common/utils";

const setThemeMode = (mode: ThemeMode) => {
  saveToLS("mode", mode);
  return {
    type: types.SET_THEME_MODE,
    data: { mode },
  };
};

const setUserAgent = (userAgent: UserAgent) => ({
  type: types.SET_USER_AGENT,
  data: { userAgent },
});

export { setThemeMode, setUserAgent };

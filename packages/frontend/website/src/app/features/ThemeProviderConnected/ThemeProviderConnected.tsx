import { useEffect, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { isEqual } from "lodash";
import { useDispatch, selectors, useSelector, actions } from "../../../redux";
import { getFromLS } from "../../../common/utils";
import { ThemeMode } from "src/app/ui-core";
import { ThemeProvider } from "../../ui-core";
import { useUserAgent } from "../../../common/hooks";

interface IProps {
  children: React.ReactNode;
}

export const ThemeProviderConnected = (props: IProps) => {
  const dispatch = useDispatch();
  const { children } = props;
  const { theme: themeSelectors } = selectors;
  const {
    theme: { setUserAgent, setThemeMode },
  } = actions;
  const modeLS = getFromLS("mode");
  const mode = useSelector(themeSelectors.mode);
  const userAgentStore = useSelector(themeSelectors.userAgent);
  const userAgent = useUserAgent();
  const browserMode = (isSystemDarkMode: boolean) =>
    // isSystemDarkMode ? "dark" : "light";
    isSystemDarkMode ? "dark" : ("dark" as ThemeMode);

  useEffect(() => {
    if (userAgent && !isEqual(userAgentStore, userAgent)) {
      dispatch(setUserAgent(userAgent));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAgentStore, userAgent]);

  useLayoutEffect(() => {
    if (modeLS) {
      dispatch(setThemeMode(modeLS as ThemeMode));
      return;
    }
    const { matches: isSystemDarkMode } = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    const mode = browserMode(isSystemDarkMode);
    dispatch(setThemeMode(mode));
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const mode = browserMode(event.matches);
        dispatch(setThemeMode(mode));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return mode ? (
    <ThemeProvider {...{ mode, userAgent }}>{children}</ThemeProvider>
  ) : (
    <div className="no-theme">{children}</div>
  );
};

ThemeProviderConnected.propTypes = {
  children: PropTypes.any,
};

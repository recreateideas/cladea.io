import { Selector } from "react-redux";
import { IReduxStore, UserAgent } from "src/redux";
import { ThemeMode } from "src/app/ui-core";

const mode: Selector<IReduxStore, ThemeMode> = (state) =>
  state.appState.theme.mode;
const isDarkMode: Selector<IReduxStore, boolean> = (state) =>
  state.appState.theme.mode === "dark";
const userAgent: Selector<IReduxStore, UserAgent | undefined> = (state) =>
  state.appState.theme.userAgent;

export { mode, isDarkMode, userAgent };

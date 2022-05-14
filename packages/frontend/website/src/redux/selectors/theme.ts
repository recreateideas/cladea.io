import { Selector } from "react-redux";
import { IReduxStore, UserAgent, Breakpoints, Margins } from "src/redux";
import { ThemeMode } from "src/app/ui-core";

export const mode: Selector<IReduxStore, ThemeMode> = (state) =>
  state.appState.theme.mode;
export const isDarkMode: Selector<IReduxStore, boolean> = (state) =>
  state.appState.theme.mode === "dark";
export const userAgent: Selector<IReduxStore, UserAgent | undefined> = (
  state
) => state.appState.theme.userAgent;
export const breakpoints: Selector<IReduxStore, Breakpoints | undefined> = (
  state
) => state.appState.theme.breakpoints;
export const margins: Selector<IReduxStore, Margins | undefined> = (state) =>
  state.appState.theme.margins;

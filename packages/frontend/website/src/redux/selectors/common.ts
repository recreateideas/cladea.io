import { Selector } from "react-redux";
import { createSelector } from "reselect";
import { IReduxStore } from "src/redux";

const getToggle =
  (toggle: string): Selector<IReduxStore, boolean | undefined> =>
  (state) =>
    state.appState.common.toggles[toggle];

const usage = (state: IReduxStore) => state.appState.common.usageData;

const usageData = createSelector(usage, (d) => d);

export { getToggle, usageData };

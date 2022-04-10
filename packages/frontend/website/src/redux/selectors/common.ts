import { Selector } from "react-redux";
import { IReduxStore } from "src/redux";

const getToggle =
  (toggle: string): Selector<IReduxStore, boolean | undefined> =>
  (state) =>
    state.appState.common.toggles[toggle];

export { getToggle };

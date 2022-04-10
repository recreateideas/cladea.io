import { IReduxStore, IReduxAction } from "src/redux";
import { initialState } from "../store/initialState";
import { types } from "../actions/common";

type SliceCommon = IReduxStore["appState"]["common"];

const common = (
  state: SliceCommon = initialState.common,
  action: IReduxAction
): SliceCommon => {
  const { type, data } = action;
  switch (type) {
    case types.SET_IS_DEV:
      return {
        ...state,
        toggles: {
          isDev: data.isDev,
        },
      };
    default:
      return state;
  }
};

export default common;

import { types } from "../actions/auth";
import { initialState } from "../store/initialState";
import { IReduxAction, IReduxStore } from "src/redux";

type SliceAuth = IReduxStore["appState"]["auth"];

const auth = (state: SliceAuth = initialState.auth, action: IReduxAction) => {
  const { type, data } = action;
  switch (type) {
    case types.SAVE_USER_DATA:
      return {
        ...state,
        user: {
          ...state.user,
          ...data.userData,
        },
      };
    default:
      return state;
  }
};

export default auth;

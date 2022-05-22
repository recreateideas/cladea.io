import { IReduxStore } from "src/redux";

const user = (state: IReduxStore) => state.appState.auth.user;

export { user };

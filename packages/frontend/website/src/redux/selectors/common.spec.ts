import { initialState } from "../store";
import { getToggle } from "./common";
import { IReduxStore } from "src/redux";

beforeEach(() => {
  jest.resetAllMocks();
});

describe("getToggle", () => {
  const state = { appState: initialState } as IReduxStore;
  it("should select the right data", () => {
    state.appState.common.toggles = { "some-toggle": true };
    const result = getToggle("some-toggle")(state);
    expect(result).toEqual(true);
  });
});

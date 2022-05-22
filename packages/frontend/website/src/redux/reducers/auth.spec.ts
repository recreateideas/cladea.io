import auth from "./auth";
import { initialState } from "../store";

describe("Store slice - auth", () => {
  it("SOME_UNKNOWN_TYPE - should return the initial state", () => {
    const result = auth(undefined, { type: "SOME_UNKNOWN_TYPE" });
    expect(result).toEqual(initialState.auth);
  });
});

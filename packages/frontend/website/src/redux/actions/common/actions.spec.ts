import { setIsDev } from "./actions";
import types from "./types";

describe("setIsDev", () => {
  it("should return isDev false", () => {
    expect(setIsDev).toEqual({
      type: types.SET_IS_DEV,
      data: { isDev: false },
    });
  });
});

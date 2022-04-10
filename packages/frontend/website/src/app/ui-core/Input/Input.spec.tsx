import { Input } from "./Input";
import { TestProvider } from "src/tests";

const { mountWithProviderAndTheme } = TestProvider();
describe("<Input/>", () => {
  it("should render", () => {
    const state = {
      common: {},
    };
    const root = mountWithProviderAndTheme(<Input />, state);
    expect(root).toMatchSnapshot();
  });
});

import { Sidebar } from "./Sidebar";
import { TestProvider } from "src/tests";

const { mountWithProviderAndTheme } = TestProvider();
describe("<Sidebar/>", () => {
  it("should render", () => {
    const state = {
      common: {},
    };
    const root = mountWithProviderAndTheme(<Sidebar />, state);
    expect(root).toMatchSnapshot();
  });
});

import { SidebarMenu } from "./SidebarMenu";
import { TestProvider } from "src/tests";

const { mountWithProviderAndTheme } = TestProvider();
describe("<SidebarMenu/>", () => {
  it("should render", () => {
    const state = {
      common: {},
    };
    const root = mountWithProviderAndTheme(<SidebarMenu />, state);
    expect(root).toMatchSnapshot();
  });
});

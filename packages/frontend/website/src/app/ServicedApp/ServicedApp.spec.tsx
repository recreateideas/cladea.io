/* eslint-disable import/first */
import { ServicedApp } from "./ServicedApp";
import { TestProvider } from "src/tests";

const { fullMount } = TestProvider();

describe("<ServicedApp/>", () => {
  it("should render", () => {
    const root = fullMount(<ServicedApp />);
    expect(root).toMatchSnapshot();
  });
});

/* eslint-disable import/first */
import { Editor } from "./Home";
jest.mock("src/redux");
import * as redux from "src/redux";
import { Container } from "./styledComponents";
import { TestProvider } from "../../../tests";
import { cloneDeep } from "lodash";

afterEach(() => {
  jest.resetAllMocks();
  jest.restoreAllMocks();
});

const { fullMount, fullShallow } = TestProvider({});

describe("<Editor/>", () => {
  const dispatchSpy = jest.fn();
  const loadSpy = jest.fn();
  const state = {
    appState: {
      editor: {
        current: { elements: undefined },
      },
    },
  };
  //@ts-ignore
  redux.actions = {
    editor: {
      loadElements: loadSpy,
    },
  };
  it("should render", () => {
    const root = fullShallow(<Editor />, state);
    const container = root.find(Container);
    expect(container).toMatchSnapshot();
    expect(root).toMatchSnapshot();
  });
  it("should load the elements on load", () => {
    jest.spyOn(redux, "useDispatch").mockReturnValue(dispatchSpy);
    const root = fullMount(<Editor />, state);
    root.update();
    expect(loadSpy).toHaveBeenCalledTimes(1);
  });
  it("should not load the elements if they have been loaded already", () => {
    const newState = cloneDeep(state);
    // const elements = ['some', 'elements'];
    newState.appState.editor.current.elements = ["some", "elements"] as any;
    // jest.spyOn(redux, 'useDispatch').mockReturnValue(dispatchSpy);
    jest.spyOn(redux, "useSelector").mockReturnValue([
      { id: "some", position: { x: 0, y: 0 }, data: {} },
      { id: "elements", position: { x: 0, y: 0 }, data: {} },
    ]);
    const root = fullMount(<Editor />, newState);
    root.update();
    expect(loadSpy).not.toHaveBeenCalledTimes(1);
  });
});

import { ReactNode } from "react";
import { Middleware, AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { Provider } from "react-redux";
import configureMockStore, { MockStoreCreator } from "redux-mock-store";
import { useForm, FormProvider } from "react-hook-form";
import { createMemoryHistory } from "history";
import { MemoryRouter, Router } from "react-router-dom";
import { render as reactRender, cleanup } from "@testing-library/react";
import { mount, shallow, render } from "enzyme";
import thunk from "redux-thunk";
import { ThemeProvider } from "src/app/ui-core";
import { IReduxStore } from "src/redux/models";

type DispatchExts = ThunkDispatch<IReduxStore, undefined, AnyAction>;

interface MockedSocket {
  socketIo: any;
  connectSpy?: (...args: any) => any;
  closeSpy?: (...args: any) => any;
  disconnectSpy?: (...args: any) => any;
  eventSpy?: (...args: any) => any;
  connectedAtSpy?: (...args: any) => any;
}

export const TestProvider = (defaultState = {}) => {
  const middlewares: Array<Middleware> = [thunk];
  const mockStore: MockStoreCreator<IReduxStore | {}, DispatchExts> =
    configureMockStore(middlewares);
  const router = {
    push: jest.fn(),
    action: "POP",
    location: {
      search: "",
      hash: "",
      state: undefined,
      pathname: "/initial-path",
      query: {},
    },
  };
  interface IFetcherMockArgs {
    error?: any;
    response?: any;
  }

  return {
    mockStore,
    mount,
    render,
    shallow,
    cleanup,

    mountWithProvider: (component: ReactNode, initialState = {}) => {
      const store = mockStore(Object.assign({}, defaultState, initialState));
      return mount(<Provider store={store}>{component}</Provider>);
    },

    mountWithProviderAndTheme: (component: ReactNode, initialState = {}) => {
      const store = mockStore(Object.assign({}, defaultState, initialState));
      return mount(
        <Provider store={store}>
          <ThemeProvider>{component}</ThemeProvider>
        </Provider>
      );
    },

    renderWithProviderAndTheme: (component: ReactNode, initialState = {}) => {
      const store = mockStore(Object.assign({}, defaultState, initialState));
      return render(
        <Provider store={store}>
          <ThemeProvider>{component}</ThemeProvider>
        </Provider>
      );
    },
    //delete
    shallowWithStore: (component: ReactNode, initialState = {}) => {
      const store = mockStore(Object.assign({ appState: initialState }));
      const history = createMemoryHistory();
      return shallow(
        <Router history={history}>
          <Provider store={store}>{component}</Provider>
        </Router>
      );
    },

    fullShallow: (component: ReactNode, initialState = {}) => {
      const store = mockStore(
        Object.assign({ appState: initialState }, { router })
      );
      return shallow(
        <Provider store={store}>
          <ThemeProvider>{component}</ThemeProvider>
        </Provider>
      );
    },

    fullMount: (component: ReactNode, initialState = {}, routerProps = {}) => {
      const store = mockStore(
        Object.assign({ appState: initialState }, { router })
      );
      return mount(
        <MemoryRouter {...routerProps}>
          <Provider store={store}>
            <ThemeProvider>{component}</ThemeProvider>
          </Provider>
        </MemoryRouter>
      );
    },

    mountWithReactHookForm: (
      component: ReactNode,
      defaultValues = {},
      initialState = {}
    ) => {
      const store = mockStore(
        Object.assign({ appState: initialState }, { router })
      );
      const Wrapper = ({ children }: any) => {
        const methods: any = useForm({ defaultValues });
        return <FormProvider {...methods}>{children}</FormProvider>;
      };
      return mount(
        <Provider store={store}>
          <ThemeProvider>
            <Wrapper>{component}</Wrapper>
          </ThemeProvider>
        </Provider>
      );
    },

    fullRender: (component: ReactNode, initialState = {}) => {
      const store = mockStore(
        Object.assign({ appState: initialState }, { router })
      );
      return reactRender(
        <MemoryRouter>
          <Provider store={store}>
            <ThemeProvider>{component}</ThemeProvider>
          </Provider>
        </MemoryRouter>
      );
    },

    mountWithFormProvider: (
      component: ReactNode,
      formProps: any,
      initialState = {}
    ) => {
      const store = mockStore(Object.assign({ appState: initialState }));
      const { control, ...otherProps } = formProps;
      return mount(
        <Provider store={store}>
          <ThemeProvider>
            <FormProvider {...otherProps}>{component}</FormProvider>
          </ThemeProvider>
        </Provider>
      );
    },

    getStore: (initialState = {}, routerProps = {}) =>
      mockStore(
        Object.assign(
          { appState: initialState },
          { router: { ...router, ...routerProps } }
        )
      ),

    mockSocket: ({
      socketIo,
      connectSpy,
      closeSpy,
      disconnectSpy,
      eventSpy,
      connectedAtSpy,
    }: MockedSocket): any =>
      jest
        .spyOn(socketIo, "io")
        //@ts-ignore
        .mockImplementation((...args: any) => ({
          on: (event: string, callback: (...a: any) => any) => {
            switch (event) {
              case "connect":
                if (connectSpy) {
                  console.log("mocked connected");
                  return connectSpy(callback);
                }
                return;
              case "close":
                if (closeSpy) {
                  console.log("mocked closed");
                  closeSpy(callback);
                  break;
                }
                return;
              case "disconnect":
                if (disconnectSpy) {
                  console.log("mocked disconnected");
                  disconnectSpy(callback);
                  break;
                }
                return;
              default:
              case "connected-at":
                if (connectedAtSpy) {
                  console.log("mocked connected-at");
                  connectedAtSpy(callback);
                  break;
                }
                return;
            }
          },
        })),
    createFetchSpy:
      (modules: any) =>
      ({ error, response }: IFetcherMockArgs) =>
        jest.spyOn(modules, "fetcher").mockImplementation((config: any) => {
          const { errorHandler, responseHandler } = config;
          if (error) {
            return errorHandler(error);
          }
          return responseHandler(response);
        }),
  };
};

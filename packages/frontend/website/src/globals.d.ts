import { Theme } from "./App/ui-core/theme";
import { Store } from "redux";

export declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
    /** enzyme global methods for testing */
    shallow: any;
    render: any;
    mount: any;
    theme: Theme;
    ResizeObserver: any;
    store: Store;
  }
}

declare module "ui-core";

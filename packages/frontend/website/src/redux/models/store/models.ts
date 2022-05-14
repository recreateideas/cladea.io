import { Action, Store } from "redux";
import { RouterState } from "connected-react-router";
import { ThemeMode } from "src/app/ui-core";

export type GetStore = () => IReduxStore;
export interface IReduxAction extends Action {
  type: string;
  data?: any;
}

export interface UserAgent {
  isMobile: boolean;
  isDesktop: boolean;
  isAndroid: boolean;
  isIos: boolean;
}

export interface UsageData {
  current: {
    [toggleName: string]: boolean;
  };
  global: {
    [toggleName: string]: boolean;
  };
}

export type Breakpoints = {
  [key: string]: number;
};

export type Margins = {
  [key: string]: number;
};
export interface AppState {
  common: {
    toggles: {
      [toggleName: string]: boolean;
    };
    usageData: UsageData;
  };

  theme: {
    mode: ThemeMode;
    userAgent?: UserAgent;
    breakpoints?: Breakpoints;
    margins?: Margins;
  };
}
export interface IReduxStore extends Store {
  appState: AppState;
  router: RouterState;
}

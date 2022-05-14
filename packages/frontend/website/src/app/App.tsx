import { ReactElement, useEffect } from "react";
import { ConnectedRouter as Router } from "connected-react-router";
import { Switch, Redirect, Route } from "react-router-dom";
import { useTheme } from "styled-components";
import { history } from "../redux";
import { routes } from "../routes";
import {
  ErrorBoundary,
  AuthenticatedRoute,
  Tracker,
  MainHeader,
  SidebarMenu,
} from "./features";
import { actions, useDispatch } from "src/redux";

import { ThemeAndUserAgent } from "./ui-core";
import { PageContainer } from "./styledComponents";

export const App = (): ReactElement => {
  const dispatch = useDispatch();
  const theme = useTheme() as ThemeAndUserAgent;
  const { isMobile } = theme.userAgent || {};
  const {
    common: { setIsDev },
  } = actions;
  useEffect(() => {
    dispatch(setIsDev);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ErrorBoundary>
      <Router {...{ history }}>
        {!isMobile ? <MainHeader /> : <SidebarMenu />}
        <Switch>
          {routes.map((routeObj, i) => {
            const {
              title,
              exact,
              path,
              components: { mainView: Component },
            } = routeObj;
            return (
              <AuthenticatedRoute
                key={i}
                exact={exact}
                path={path}
                title={title}
                render={(props) => (
                  <>
                    <Tracker />
                    <PageContainer>
                      <Component {...props} route={routeObj} />
                    </PageContainer>
                  </>
                )}
              />
            );
          })}
          <Route path="/">
            <Redirect exact to="/" />
          </Route>
        </Switch>
      </Router>
    </ErrorBoundary>
  );
};

App.displayName = "App";

App.defaultProps = {};

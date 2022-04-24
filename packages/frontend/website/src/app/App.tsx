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
  MainFooter,
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
        <Switch>
          {Object.values(routes).map((routeObj, i) => {
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
                      {!isMobile && <MainHeader />}
                      <Component {...props} />
                      {isMobile && <MainFooter />}
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

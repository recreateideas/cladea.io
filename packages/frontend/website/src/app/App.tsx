import { ReactElement, useEffect } from "react";
import { ConnectedRouter as Router } from "connected-react-router";
import { Switch, Redirect, Route } from "react-router-dom";
import { history } from "../redux";
import { routes } from "../routes";
import {
  ErrorBoundary,
  AuthenticatedRoute,
  Sidebar,
  Tracker,
} from "./features";
import { actions, useDispatch } from "src/redux";

export const App = (): ReactElement => {
  const dispatch = useDispatch();
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
                  //     <PageContainer>
                  //         <Header title={title} />
                  //         <PageContent className="page-content">
                  <>
                    <Tracker />
                    <Sidebar />
                    <Component {...props} />
                  </>
                  //         </PageContent>
                  //     </PageContainer>
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

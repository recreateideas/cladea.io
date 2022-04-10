import { ReactElement, useEffect } from 'react';
import { ConnectedRouter as Router } from 'connected-react-router';
import { Switch, Redirect, Route, HashRouter } from 'react-router-dom';
import { history } from '../redux';
import { routes } from '../routes';
import { ErrorBoundary, AuthenticatedRoute } from './features';
import { actions, useDispatch } from 'src/redux';
import { WindowHeader } from './ui-core';

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
            <Router history={history}>
                <HashRouter>
                    <WindowHeader />
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
                                        /* istanbul ignore next */
                                        <Component {...props} />
                                        //         </PageContent>
                                        //     </PageContainer>
                                    )}
                                />
                            );
                        })}
                        <Route path="/">
                            <Redirect exact to="/editor" />
                        </Route>
                    </Switch>
                </HashRouter>
            </Router>
        </ErrorBoundary>
    );
};

App.displayName = 'App';

App.defaultProps = {};

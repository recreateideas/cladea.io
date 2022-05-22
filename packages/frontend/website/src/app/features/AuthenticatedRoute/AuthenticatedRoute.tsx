import { memo, ReactElement, useEffect, useLayoutEffect } from "react";
import { LocationDescriptor } from "history";
import { Route } from "react-router-dom";
import { isEqual } from "lodash";
import {
  actions,
  selectors,
  useSelector,
  useDispatch,
  User,
  TokenDataLs,
} from "../../../redux";
import { deleteFromLS, getFromLS } from "src/common";
interface IProps {
  redirectUrl?: LocationDescriptor<unknown>;
  title?: string;
  showBackButton?: boolean;
  exact?: boolean;
  path?: string | string[];
  location?: {
    pathname?: string;
  };
  render: (props: any) => ReactElement;
}

export const AuthenticatedRoute = memo((props: IProps) => {
  const {
    redirectUrl,
    title = "Random",
    showBackButton,
    ...routeProps
  } = props;
  const {
    router: { setRouteParams },
    auth: { setUserData, refreshToken },
  } = actions;
  const dispatch = useDispatch();
  const { router: routerSelectors } = selectors;
  const location = useSelector(routerSelectors.location);
  const tokenData = getFromLS("tkn") as TokenDataLs;
  const userData = getFromLS("usr") as User;
  // const isAuthenticated = !!userData;

  const { location: locationProps, path } = routeProps;
  useEffect(() => {
    if (path && locationProps?.pathname) {
      dispatch(setRouteParams(path));
    }
  }, [dispatch, locationProps, path, setRouteParams]);

  useEffect(() => {
    if (!tokenData || !userData) {
      deleteFromLS("tkn");
      deleteFromLS("usr");
      return;
    }
    const minToExpire = Math.floor(
      (tokenData.expTime - +new Date()) / 1000 / 60
    );
    if (minToExpire < 5) {
      dispatch(refreshToken(tokenData));
    }
    // console.log(tokenData);
    dispatch(setUserData(userData));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!!tokenData, !!userData]);

  useLayoutEffect(() => {
    document.title = `Cladea.io - ${title}`;
  }, [title]);

  const allProps = {
    ...routeProps,
    location,
  };
  return <Route {...allProps} />;
}, isEqual);

AuthenticatedRoute.displayName = "AuthenticatedRoute";

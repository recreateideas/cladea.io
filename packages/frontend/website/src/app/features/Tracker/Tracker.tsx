/* eslint-disable react-hooks/exhaustive-deps */
import { ReactElement, useEffect } from "react";
import { getFromLS } from "src/common";
import { actions, selectors, useDispatch, User, useSelector } from "src/redux";

interface IProps {}
export const Tracker = (props: IProps): ReactElement => {
  const dispatch = useDispatch();
  const { auth: authSelectors } = selectors;
  const userDataLs = getFromLS("usr") as User;
  const {
    common: { makeUseRequest },
  } = actions;
  const user = useSelector(authSelectors.user);
  useEffect(() => {
    if ((userDataLs && user?.userId) || !userDataLs) {
      dispatch(makeUseRequest());
    }
  }, [!!userDataLs, !!user?.userId]);

  return <></>;
};

Tracker.displayName = "Tracker";

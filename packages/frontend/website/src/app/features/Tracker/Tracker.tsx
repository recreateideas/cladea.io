/* eslint-disable react-hooks/exhaustive-deps */
import { ReactElement, useEffect } from "react";
import { actions, useDispatch } from "src/redux";

interface IProps {}
export const Tracker = (props: IProps): ReactElement => {
  const dispatch = useDispatch();
  const {
    common: { makeUseRequest },
  } = actions;
  useEffect(() => {
    dispatch(makeUseRequest());
  }, []);

  return <></>;
};

Tracker.displayName = "Tracker";

Tracker.defaultProps = {};

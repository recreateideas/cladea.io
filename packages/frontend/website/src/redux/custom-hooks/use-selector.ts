import { Selector, useSelector as useReactReduxSelector } from "react-redux";
import { IReduxStore } from "src/redux";
import { isEqual } from "lodash";

type FnSelector = Selector<IReduxStore, any>;

export const useSelector = (fn: FnSelector, rerenderOnChange = true) => {
  /* istanbul ignore next */
  const equalityFn = rerenderOnChange ? isEqual : () => true;
  return useReactReduxSelector(fn, equalityFn);
};

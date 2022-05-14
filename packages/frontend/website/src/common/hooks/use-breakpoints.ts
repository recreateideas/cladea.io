import { useState, useLayoutEffect } from "react";
import { Breakpoints, selectors, useSelector } from "src/redux";

const sortBreakpoints = (breakpoints: Breakpoints) =>
  Object.keys(breakpoints).sort((a, b) => breakpoints[a] - breakpoints[b]);

const getBreakpointFromWidth = (width: number, breakpoints: Breakpoints) => {
  const sorted = sortBreakpoints(breakpoints);
  let [matching] = sorted;
  sorted.forEach((breakpoint) => {
    if (width > breakpoints[breakpoint]) {
      matching = breakpoint;
    }
  });
  return matching;
};

export const useBreakpoints = () => {
  const isClient = typeof window === "object";
  const getWidth = () => (isClient ? window.innerWidth : 0);
  const { theme: themeSelectors } = selectors;
  const breakpoints = useSelector(themeSelectors.breakpoints);
  const startBreakpoint = getBreakpointFromWidth(getWidth(), breakpoints);
  const [breakpoint, setBreakpoint] = useState(startBreakpoint);
  useLayoutEffect(() => {
    if (!isClient) {
      return;
    }
    function handleResize() {
      const newWidth = getWidth();
      const newBreakpoint = getBreakpointFromWidth(newWidth, breakpoints);
      if (newBreakpoint !== breakpoint) {
        setBreakpoint(newBreakpoint);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line
  }, [startBreakpoint]);
  return breakpoint;
};

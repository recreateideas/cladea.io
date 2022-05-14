import { selectors, useSelector } from "src/redux";
import { useBreakpoints } from "./use-breakpoints";

export const useMargin = () => {
  const { theme: themeSelectors } = selectors;
  const margins = useSelector(themeSelectors.margins);
  const breakpoint = useBreakpoints();
  return margins[breakpoint];
};

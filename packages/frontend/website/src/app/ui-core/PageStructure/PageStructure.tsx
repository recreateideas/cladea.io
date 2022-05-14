import { ReactElement, useLayoutEffect, useRef, useState } from "react";
import { useScrollY, useMargin, useBreakpoints } from "src/hooks";
import { Container } from "./styledComponents";

interface IProps {
  children: ReactElement | ReactElement[];
}
export const PageStructure = (props: IProps): ReactElement => {
  const { children } = props;
  const ref = useRef(null);
  const [bodyEl, setBodyEl] = useState<HTMLElement | null>(null);
  const thresholds = [16, 100];
  const breakpoint = useBreakpoints();
  const margin = useMargin();
  const { hasYScrolled1, hasYScrolled2, onScroll } = useScrollY(
    bodyEl,
    thresholds
  );
  useLayoutEffect(() => {
    if (ref.current) {
      const body = (ref.current as HTMLElement).querySelector(
        ".body"
      ) as HTMLElement;
      setBodyEl(body);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.current]);
  useLayoutEffect(() => {
    if (bodyEl && !!onScroll) {
      bodyEl.onscroll = onScroll as any;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!!bodyEl, !!onScroll]);
  return (
    <Container
      ref={ref}
      margin={margin}
      breakpoint={breakpoint}
      hasBodyYScrolled1={hasYScrolled1}
      hasBodyYScrolled2={hasYScrolled2}
    >
      {children}
    </Container>
  );
};

PageStructure.displayName = "PageStructure";

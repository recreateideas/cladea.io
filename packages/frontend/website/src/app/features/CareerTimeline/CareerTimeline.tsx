import { ReactElement, useState } from "react";
import {
  Timeline as TimelineCore,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Fastfood } from "@mui/icons-material";
import { useTheme } from "styled-components";
import { Container, Role } from "./styledComponents";
import { ThemeAndUserAgent } from "src/app/ui-core";
import { useBreakpoints } from "src/common/hooks";
import { roles } from "./roles";

interface IProps {}
export const CareerTimeline = (props: IProps): ReactElement => {
  const theme = useTheme() as ThemeAndUserAgent;
  const [activeItemIndex, setActiveItemIndex] = useState<number | undefined>();
  const breakpoint = useBreakpoints();
  const { isMobile } = theme.userAgent || {};
  return (
    <Container className="timeline" breakpoint={breakpoint}>
      <TimelineCore position="right" className="timeline">
        {roles.map((role, i) => {
          const isFirst = i === 0;
          const isLast = i === roles.length - 1;
          const isBeforePromotion = roles[i - 1]?.promotion;
          const isActive = activeItemIndex === i;
          return (
            <Role
              key={i}
              className="role"
              breakpoint={breakpoint}
              isPromotion={role.promotion}
              isBeforePromotion={isBeforePromotion}
              isActive={isActive}
              onClick={setActiveItemIndex.bind(null, i)}
              onMouseEnter={setActiveItemIndex.bind(null, i)}
              onMouseLeave={setActiveItemIndex.bind(null, undefined)}
            >
              <TimelineOppositeContent className="date-container">
                <div className="date">
                  {isMobile ? (
                    <>
                      <span className="start">{role.end}</span>
                      <br />
                      <span className="iphen">&nbsp;-&nbsp;</span>
                      <br />
                      <span className="end">{role.start}</span>
                    </>
                  ) : (
                    <>
                      <span className="start">{role.start}</span>
                      <span className="iphen">&nbsp;-&nbsp;</span>
                      <span className="end">{role.end}</span>
                    </>
                  )}
                </div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                {!isFirst && <TimelineConnector className="connector top" />}
                <TimelineDot>
                  <Fastfood />
                </TimelineDot>
                {!isLast && <TimelineConnector className="connector bottom" />}
              </TimelineSeparator>
              <TimelineContent
                sx={{ py: "12px", px: 2 }}
                className="item-content"
              >
                <div className="inner-content">
                  <div className="header-top">{role.position}</div>
                  <div className="header-bottom">{role.companyName}</div>
                </div>
              </TimelineContent>
            </Role>
          );
        })}
      </TimelineCore>
    </Container>
  );
};

CareerTimeline.displayName = "CareerTimeline";

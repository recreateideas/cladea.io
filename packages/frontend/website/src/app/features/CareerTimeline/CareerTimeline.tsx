import { ReactElement } from "react";
import {
  Timeline as TimelineCore,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Container } from "./styledComponents";
import { Fastfood } from "@mui/icons-material";
import { roles } from "./roles";
import { useTheme } from "styled-components";
import { ThemeAndUserAgent } from "src/app/ui-core";
import { useBreakpoints } from "src/hooks";

interface IProps {}
export const CareerTimeline = (props: IProps): ReactElement => {
  const theme = useTheme() as ThemeAndUserAgent;
  const breakpoint = useBreakpoints();
  const { isMobile } = theme.userAgent || {};
  return (
    <Container className="timeline" breakpoint={breakpoint}>
      <TimelineCore position="right" className="timeline">
        {roles.map((role, i) => {
          const isFirst = i === 0;
          const isLast = i === roles.length - 1;
          return (
            <TimelineItem key={i}>
              <TimelineOppositeContent className="date-container">
                <div className="date">
                  <span className="start">{role.start}</span>
                  {isMobile && <br />}
                  <span className="iphen">&nbsp;-&nbsp;</span>
                  {isMobile && <br />}
                  <span className="end">{role.end}</span>
                </div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                {!isFirst && <TimelineConnector className="connector" />}
                <TimelineDot>
                  <Fastfood />
                </TimelineDot>
                {!isLast && <TimelineConnector className="connector" />}
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
            </TimelineItem>
          );
        })}
      </TimelineCore>
    </Container>
  );
};

CareerTimeline.displayName = "CareerTimeline";

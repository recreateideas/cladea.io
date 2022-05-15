import { ReactElement, useState } from "react";
import {
  Timeline as TimelineCore,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { useTheme } from "styled-components";
import { Collapse } from "react-bootstrap";
import { Container, Role, Details } from "./styledComponents";
import { ThemeAndUserAgent } from "src/app/ui-core";
import { useBreakpoints } from "src/common/hooks";
import * as companyLogos from "src/app/ui-core/images/company-logos";
import { CompanyLogos } from "src/app/ui-core/images/company-logos";
import { roles, stacks } from "./roles";

interface IProps {}
export const CareerTimeline = (props: IProps): ReactElement => {
  const theme = useTheme() as ThemeAndUserAgent;
  const [activeItemIndex, setActiveItemIndex] = useState<number | undefined>();
  const [expandedItemIndexes, setExpandedItemIndexes] = useState<number[]>([]);
  const breakpoint = useBreakpoints();
  const { isMobile } = theme.userAgent || {};
  const onItemClick = (i: number) => {
    setExpandedItemIndexes((expanded) => {
      let newExpanded = JSON.parse(JSON.stringify(expanded));
      const already = expanded.includes(i);
      if (already) {
        const idx = expanded.findIndex((o) => o === i);
        newExpanded.splice(idx, 1);
        setTimeout(() => {
          setActiveItemIndex(undefined);
        }, 320);
      } else {
        if (activeItemIndex !== i) {
          setActiveItemIndex(i);
        }
        newExpanded.push(i);
      }
      return newExpanded;
    });
  };
  return (
    <Container className="timeline" breakpoint={breakpoint}>
      <TimelineCore position="right" className="timeline">
        {roles.map((role, i) => {
          const isFirst = i === 0;
          const isLast = i === roles.length - 1;
          const isBeforePromotion = roles[i - 1]?.promotion;
          const isActive = activeItemIndex === i;
          const isExpanded = expandedItemIndexes?.includes(i);
          return (
            <Role
              key={i}
              className="role"
              breakpoint={breakpoint}
              isPromotion={role.promotion}
              isBeforePromotion={isBeforePromotion}
              isActive={isActive}
              isExpanded={isExpanded}
              onClick={onItemClick.bind(null, i)}
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
                <div className="company-logo">
                  <img
                    src={(companyLogos as CompanyLogos)[role.logo]}
                    alt={`company logo ${role.logo}`}
                  />
                </div>
                {!isLast && <TimelineConnector className="connector bottom" />}
              </TimelineSeparator>
              <TimelineContent
                sx={{ py: "12px", px: 2 }}
                className="item-content"
              >
                <div className="inner-content">
                  <div className="header-top">{role.position}</div>
                  <div className="header-bottom">
                    <div className="company-name">{role.companyName}</div>
                    {!isMobile && (
                      <div className="company-location">{role.location}</div>
                    )}
                  </div>
                  <Collapse in={isExpanded}>
                    <div className="details-container">
                      <Details className="details description">
                        {role.details.stack && (
                          <>
                            <div className="details-title stack">Stack</div>
                            <div className="details-content stack">
                              <div className="bullet-list">
                                {role.details.stack?.map((s, i) => {
                                  const { label } = stacks[s];
                                  return (
                                    <div key={i} className="list-item bold">
                                      <div className="bullet"></div>
                                      {label}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </>
                        )}
                      </Details>
                      <Details className="details description">
                        <div className="details-title keys">Keys</div>
                        <div className="details-content">
                          {role.details.keyPoints?.map((s, i) => {
                            return (
                              <div key={i} className="list-item">
                                <div className="bullet"></div>
                                {s}
                              </div>
                            );
                          })}
                        </div>
                      </Details>
                    </div>
                  </Collapse>
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

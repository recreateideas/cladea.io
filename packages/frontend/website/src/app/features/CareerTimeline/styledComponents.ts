import { TimelineItem } from "@mui/lab";
import styled, { css } from "styled-components";

const gap = "4px";

export const Container = styled.div<{ breakpoint: string }>`
  ${(props) => {
    const { breakpoint } = props;
    return css`
      .timeline {
        padding: 8px ${breakpoint === "sm" ? "0px" : "16px"}; 0 0;
      }
      li:nth-of-type(1) {
        .item-content {
          padding-top: 0;
          .inner-content {
            margin-top: 0;
          }
        }
        .date-container {
          position: relative;
          top: calc(${gap} * -3);
        }
      }
      li:last-of-type {
        .item-content {
          padding-bottom: 0;
          .inner-content {
            margin-bottom: 0;
          }
        }
        .date-container {
          position: relative;
          top: calc(${gap} * 3);
        }
      }
    `;
  }}
`;

export const Role = styled(TimelineItem)<{
  breakpoint: string;
  isPromotion?: boolean;
  isBeforePromotion?: boolean;
  isActive?: boolean;
}>`
  ${(props) => {
    const {
      theme: {
        dsl: { typography, palette },
      },
      breakpoint,
      isPromotion,
      isBeforePromotion,
      isActive,
    } = props;
    return css`
      cursor: pointer;
      .date-container {
        flex: 0;
        margin: auto 0;
        min-width: ${breakpoint === "sm" ? "14vw" : "10vw"};
        max-width: 100px;
        text-align: right;
        padding-left: 0;
        padding-right: 0;
        margin-right: ${breakpoint === "sm" ? "8px" : "16px"};
        .date {
          ${typography.typefaces.label({ color: "secondary" })}
          white-space: nowrap;
        }
      }
      .item-content {
        padding-right: 0px;
        .inner-content {
          border: solid 1px ${palette.neutrals.borders};
          border-radius: 12px;
          margin: ${gap};
          padding: 8px;
          background-color: ${palette.neutrals.quaternaryBg};
          ${isActive &&
          css`
            box-shadow: ${palette.neutrals.boxShadow()};
          `};
        }
      }
      .header-top {
        font-weight: 600;
        margin-bottom: 4px;
      }
      .header-bottom {
        color: ${palette.secondary.neon[900]};
      }
      .connector {
        background-color: ${palette.tertiary.pink[500]};
        position: relative;
        ${isPromotion &&
        css`
          &.bottom:after {
            content: "";
            position: absolute;
            transform: translateX(calc(-50% + 1px)) translateY(-8px);
            background-color: ${palette.tertiary.pink[500]};
            border: solid 3px ${palette.neutrals.secondaryBg};
            box-sizing: border-box;
            width: 13px;
            height: 13px;
            border-radius: 100%;
            z-index: 0;
          }
        `}
        ${isBeforePromotion &&
        css`
          &.top:after {
            content: "";
            position: absolute;
            transform: translateX(calc(-50% + 1px)) translateY(+8px);
            background-color: ${palette.tertiary.pink[500]};
            border: solid 3px ${palette.neutrals.secondaryBg};
            box-sizing: border-box;
            width: 13px;
            height: 13px;
            border-radius: 100%;
            z-index: 0;
            bottom: 0;
          }
        `}
      }
    `;
  }}
`;

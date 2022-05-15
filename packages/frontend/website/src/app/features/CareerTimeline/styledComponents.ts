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
      .company-logo {
        border-radius: 100%;
        overflow: hidden;
        margin: 10px 0;
        ${isBeforePromotion &&
        css`
          margin-top: 2px;
        `}
        ${isPromotion &&
        css`
          margin-bottom: 2px;
        `}
        img {
          /* width: 10vw;
          height: 10vw; */
          max-width: 48px;
          max-height: 48px;
        }
      }
      .header-top {
        font-weight: 600;
        margin-bottom: 4px;
      }
      .header-bottom {
        display: flex;
        justify-content: space-between;
        .company-name {
          width: 100%;
          color: ${palette.secondary.neon[900]};
        }
        .company-location {
          ${typography.typefaces.label({ color: "secondary" })}
          white-space: nowrap;
          line-height: 22px;
        }
      }
      .connector {
        background-color: ${palette.tertiary.pink[500]};
        position: relative;
        ${isBeforePromotion &&
        css`
          &.bottom {
            max-height: 24px !important;
          }
        `}
        ${isPromotion &&
        css`
          &.top {
            max-height: 24px !important;
          }
        `}
        ${isPromotion &&
        css`
          &.bottom:after {
            content: "";
            position: absolute;
            transform: translateX(calc(-50% + 1px)) translateY(-8px);
            background-color: ${palette.tertiary.pink[500]};
            border: solid 3px ${palette.neutrals.secondaryBg};
            box-sizing: border-box;
            width: 15px;
            height: 15px;
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
            width: 15px;
            height: 15px;
            border-radius: 100%;
            z-index: 0;
            bottom: 0;
          }
        `}
      }
    `;
  }}
`;

export const Details = styled.div`
  ${(props) => {
    const {
      theme: {
        dsl: { typography, palette },
      },
    } = props;
    return css`
      .details-title {
        margin-left: 8px;
        ${typography.typefaces.p({ color: "secondary" })}
      }
      .details-content {
        margin-left: 16px;
      }
      .list-item {
        display: flex;
        &.bold {
          font-weight: 600;
        }
        .bullet {
          width: 6px;
          min-width: 6px;
          height: 6px;
          margin: 8px 8px auto 8px;
          border-radius: 100%;
          background-color: ${palette.tertiary.pink[500]};
        }
      }
      .color-neon {
        color: ${palette.secondary.neon[500]};
      }
      .color-yellow {
        color: ${palette.secondary.yellow[500]};
      }
      .color-orange {
        color: ${palette.secondary.orange[500]};
      }
      .color-green {
        color: ${palette.secondary.green[500]};
      }
    `;
  }}
`;

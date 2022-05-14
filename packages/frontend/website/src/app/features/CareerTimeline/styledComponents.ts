import styled, { css } from "styled-components";

export const Container = styled.div`
  ${(props) => {
    const {
      theme: {
        dsl: { typography, palette },
      },
    } = props;
    const gap = "4px";
    return css`
      .timeline {
        padding: 8px 0;
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
      .date-container {
        flex: 0;
        margin: auto 0;
        min-width: 16vw;
        max-width: 100px;
        text-align: right;
        padding-left: 0;
        padding-right: 0;
        margin-right: 8px;
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
        }
      }
      .header-top {
        font-weight: 600;
      }
      .header-bottom {
        color: ${palette.secondary.neon[900]};
      }
      .connector {
        background-color: ${palette.tertiary.pink[500]};
      }
    `;
  }}
`;

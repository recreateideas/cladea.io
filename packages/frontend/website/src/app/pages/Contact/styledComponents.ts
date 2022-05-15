import styled, { css } from "styled-components";

export const Container = styled.div`
  ${(props) => {
    const {
      theme: {
        dsl: { typography },
      },
    } = props;
    return css`
      height: 100%;
      width: 100%;
      position: relative;
      display: flex;
      .body-main-content {
        flex-direction: row !important;
        justify-content: center;
      }
      .footer {
        .logo {
          width: 100%;
          display: flex;
          justify-content: center;
          img {
            height: 8vh;
          }
        }
        .copyright {
          text-align: center;
          ${typography.typefaces.label({ color: "secondary" })}
          line-height: 1.2;
          padding-bottom: 8px;
          box-sizing: border-box;
        }
      }
    `;
  }};
`;

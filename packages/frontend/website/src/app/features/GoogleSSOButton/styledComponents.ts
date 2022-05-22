import styled, { css } from "styled-components";

export const AnchorContainer = styled.a`
  ${(props) => {
    const {
      theme: {
        dsl: { palette },
      },
    } = props;
    return css`
      width: 100%;
      &,
      &:visited,
      &:hover,
      &:active {
        color: white;
        text-decoration: none;
      }
      .goo-content {
        display: flex;
        background-color: white;
        border-radius: 3px;
        overflow: hidden;
        .goo-logo {
          padding: 4px;
          img {
            width: 24px;
          }
        }
        .goo-text {
          background-color: ${palette.primary.googleBlue};
          color: white;
          white-space: nowrap;
          width: 100%;
          display: flex;
          font-size: 13px;
          padding: 4px 8px;
        }
      }
    `;
  }}
`;

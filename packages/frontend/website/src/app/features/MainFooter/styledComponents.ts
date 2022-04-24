import styled, { css } from "styled-components";

export const Container = styled.div`
  ${(props) => {
    const {
      theme: {
        dsl: { palette },
      },
    } = props;
    return css`
      background-color: ${palette.neutrals.secondaryBg};
      box-shadow: none;
      background-image: none;
      .buttons {
        display: flex;
        justify-content: space-between;
        padding: 32px;
        padding-top: 8px;
        padding-bottom: 24px;
      }
    `;
  }}
`;

import styled, { css } from "styled-components";

export const Container = styled.div`
  ${(props) => {
    const {
      theme: {
        dsl: {
          layout: {
            namedZIndex: { leftSidebar },
          },
        },
      },
    } = props;
    return css`
      z-index: ${leftSidebar - 1};
    `;
  }}
`;

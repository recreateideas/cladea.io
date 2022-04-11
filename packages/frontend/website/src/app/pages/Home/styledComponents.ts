import styled, { css } from "styled-components";

export const Container = styled.div`
  ${(props) => {
    const {
      theme: {
        dsl: { layout },
      },
    } = props;
    return css`
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      display: flex;
      overflow: auto;
      .globe-container {
        width: 100%;
        display: flex;
        justify-content: center;
        z-index: ${layout.namedZIndex.homeWorldMap};
      }
    `;
  }}
`;

export const ActionLoaderContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  position: absolute;

  ${(props) => {
    const {
      theme: {
        dsl: { layout },
      },
    } = props;
    return css`
      bottom: ${layout.spacing.midlarge};
      right: ${layout.spacing.midlarge};
    `;
  }}
`;

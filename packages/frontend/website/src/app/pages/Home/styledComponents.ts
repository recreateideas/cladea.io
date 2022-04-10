import styled, { css } from "styled-components";

export const Container = styled.div`
  ${(props) => {
    const {
      theme: {
        userAgent,
        dsl: { layout },
      },
    } = props;
    const widthPercent = userAgent?.isMobile ? 100 : 60;
    return css`
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      display: flex;
      overflow: auto;
      .world-map-container {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: ${layout.padding.large};
        z-index: ${layout.namedZIndex.homeWorldMap};
        .world-map {
          width: ${widthPercent}%;
        }
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

import styled, { css, FlattenInterpolation } from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${(props) => {
    const {
      theme: {
        dsl: { palette },
      },
    } = props;
    return css`
      background: linear-gradient(
        217deg,
        ${palette.neutrals.primaryBg},
        rgba(0, 0, 0, 0) 50.71%
      );
    `;
  }}
`;

export const Star = styled.div<{ styledCss?: FlattenInterpolation<any> }>`
  ${(props) => props.styledCss}
`;

export const Ufo = styled.div`
  .flying-saucer {
    /* transform: scale(0.5); */
    width: 100px !important;
  }
  ${(props) => {
    const {
      theme: {
        dsl: {
          animations: { orbit2 },
          layout: {
            namedZIndex: { starrySkyUfo },
          },
        },
      },
    } = props;
    const { innerHeight, innerWidth } = window;
    return css`
      display: flex;
      position: absolute;
      z-index: ${starrySkyUfo};
      /* left: ${innerWidth * 0.6}px; */
      bottom: 0;
      img {
        width: 56px;
      }
      ${orbit2({
        aSymmetric: true,
        radius: innerHeight - 120,
        duration: 20,
        startingImageAngle: 108,
      })};
    `;
  }}
`;
/**

    ${orbit({
      radius: diagonal * 0.7,
      duration: 15,
      startingImageAngle: 108,
    })};
 */

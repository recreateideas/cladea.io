import styled, { css } from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const RingsContainer = styled.div`
  ${(props) => {
    const {
      theme: {
        dsl: { palette },
      },
    } = props;
    return css`
      height: 100%;
      width: 100%;
      position: absolute;
      > .rings-wrapper {
        height: 100%;
        width: 100%;
        svg,
        .rings-label {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        .rings-label {
          color: ${palette.secondary.neon[500]};
          font-weight: 600;
        }
      }
    `;
  }}
`;

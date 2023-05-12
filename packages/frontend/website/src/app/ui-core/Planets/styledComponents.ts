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

export const Moon = styled.div<{ size?: number }>`
  position: absolute;
  ${(props) => {
    const {
      size = 100,
      theme: {
        dsl: {
          layout: {
            namedZIndex: { starrySkyMoon },
          },
        },
      },
    } = props;
    const bottomPercent = Math.max(5, Math.floor(Math.random() * 10) + 1);
    const leftPercent = Math.max(15, Math.floor(Math.random() * 100) + 1);
    const rndSize = size - Math.floor(Math.random() * 20);
    return css`
      img {
        width: ${rndSize}px;
        height: ${rndSize}px;
      }
      z-index: ${starrySkyMoon};
      bottom: ${bottomPercent}%;
      left: calc(${leftPercent}% - ${size}px);
    `;
  }}
`;

export const Planet = styled.div<{ size?: number }>`
  position: absolute;
  ${(props) => {
    const { size = 50 } = props;
    const topPercent = Math.max(5, Math.floor(Math.random() * 10));
    const leftPercent = Math.max(25, Math.floor(Math.random() * 100) + 1);
    const rndSize = size + Math.floor(Math.random() * 20);
    return css`
      img {
        width: ${rndSize}px;
      }
      top: calc(${topPercent}% + 0px);
      left: calc(${leftPercent}% - ${size}px);
    `;
  }}
`;

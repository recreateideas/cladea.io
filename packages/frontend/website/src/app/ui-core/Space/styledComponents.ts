import styled, { css } from "styled-components";

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
          ${palette.primary.darkIndigo[950]},
          rgba(0, 0, 0, 0) 70.71%
        ),
        linear-gradient(
          127deg,
          ${palette.primary.darkIndigo[950]},
          rgba(0, 0, 0, 0) 70.71%
        ),
        linear-gradient(
          336deg,
          ${palette.primary.darkIndigo[850]},
          rgba(0, 0, 0, 0) 70.71%
        );
    `;
  }}
`;

export const Star = styled.div<{ maxSize?: number }>`
  position: absolute;
  border-radius: 100%;
  ${(props) => {
    const {
      maxSize = 4,
      theme: {
        dsl: {
          animations: { glimmer },
        },
      },
    } = props;
    const { innerHeight, innerWidth } = window;
    const top = Math.floor(Math.random() * innerHeight) + 1;
    const left = Math.floor(Math.random() * innerWidth) + 1;
    const size = Math.floor(Math.random() * maxSize) + 1;
    const duration = Math.random() * 10 + 2;
    const brightness = 100 + size * (155 / maxSize);
    return css`
      top: ${top}px;
      left: ${left}px;
      width: ${size}px;
      height: ${size}px;
      background-color: rgb(${brightness}, ${brightness}, ${brightness});
      ${glimmer({ duration, size: size * 1.5, brightness })}
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
    const {
      size = 50,
      theme: {
        dsl: {
          layout: {
            namedZIndex: { starrySkyPlanet },
          },
        },
      },
    } = props;
    const topPercent = Math.max(5, Math.floor(Math.random() * 10));
    const leftPercent = Math.max(25, Math.floor(Math.random() * 100) + 1);
    const rndSize = size + Math.floor(Math.random() * 20);
    return css`
      img {
        width: ${rndSize}px;
      }
      z-index: ${starrySkyPlanet};
      top: calc(${topPercent}% + 0px);
      left: calc(${leftPercent}% - ${size}px);
    `;
  }}
`;

export const Ufo = styled.div`
  ${(props) => {
    const {
      theme: {
        dsl: {
          animations: { orbit },
          layout: {
            namedZIndex: { starrySkyUfo },
          },
        },
      },
    } = props;
    const { innerHeight, innerWidth } = window;
    const diagonal = Math.sqrt(
      Math.pow(innerHeight, 2) + Math.pow(innerWidth, 2)
    );
    return css`
      display: flex;
      position: absolute;
      z-index: ${starrySkyUfo};
      left: ${innerWidth * 0.75}px;
      bottom: 0;
      ${orbit({
        radius: diagonal * 0.7,
        duration: 15,
        startingImageAngle: 108,
      })};
      img {
        width: 72px;
      }
    `;
  }}
`;

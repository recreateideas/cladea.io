import { useMemo } from "react";
import { useTheme, css } from "styled-components";
import { Theme } from "src/app/ui-core";

export const useStars = (count: number) => {
  const theme = useTheme() as Theme;
  const {
    dsl: {
      animations: { glimmer },
    },
  } = theme;
  return useMemo(
    () =>
      new Array(count).fill("").map(() => {
        const maxSize = 4;
        const { innerHeight, innerWidth } = window;
        const top = Math.floor(Math.random() * innerHeight) + 1;
        const left = Math.floor(Math.random() * innerWidth) + 1;
        const size = Math.floor(Math.random() * maxSize) + 1;
        const duration = Math.random() * 10 + 2;
        const brightness = 100 + size * (155 / maxSize);
        return css`
          position: absolute;
          border-radius: 100%;
          top: ${top}px;
          left: ${left}px;
          width: ${size}px;
          height: ${size}px;
          background-color: rgb(${brightness}, ${brightness}, ${brightness});
          ${glimmer({ duration, size: size * 1.5, brightness })}
        `;
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [count, window.innerWidth, window.innerHeight]
  );
};

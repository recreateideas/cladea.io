import { keyframes, css } from "styled-components";

interface Orbit {
  duration: number;
  radius: number;
  startingImageAngle: number;
  aSymmetric?: boolean;
}
type KeyFrames = Pick<Orbit, "radius" | "startingImageAngle" | "aSymmetric">;
const keyFrames =
  ({ radius, startingImageAngle, aSymmetric }: KeyFrames) =>
  () => {
    return keyframes`
    0% {
      ${
        aSymmetric &&
        css`
          left: ${radius}px;
        `
      }
      transform: rotate(0deg) translate(${radius}px) rotate(${startingImageAngle}deg);
    }
    50% {
      ${
        aSymmetric &&
        css`
          left: 0px;
        `
      }
      transform: rotate(360deg) translate(${radius}px) rotate(${startingImageAngle}deg);
    }
    100% {
      ${
        aSymmetric &&
        css`
          left: ${radius}px;
        `
      }
      transform: rotate(720deg) translate(${radius}px) rotate(${startingImageAngle}deg);
    }
    `;
  };

export const orbit2 = ({
  duration,
  radius,
  startingImageAngle,
  aSymmetric,
}: Orbit) => css`
  animation-name: ${keyFrames({ radius, startingImageAngle, aSymmetric })};
  animation-duration: ${duration}s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

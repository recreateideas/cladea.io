import { keyframes, css } from "styled-components";

const keyFrames =
  ({
    radius,
    startingImageAngle,
  }: {
    radius: number;
    startingImageAngle: number;
  }) =>
  () => {
    return keyframes`
    from {
      transform: rotate(0deg) translate(${radius}px) rotate(${startingImageAngle}deg) scale(1);
    }
    to {
      transform: rotate(360deg) translate(${radius}px) rotate(${startingImageAngle}deg) scale(0.5);
    }
    `;
  };

export const orbit = ({
  duration,
  radius,
  startingImageAngle,
}: {
  duration: number;
  radius: number;
  startingImageAngle: number;
}) => css`
  animation-name: ${keyFrames({ radius, startingImageAngle })};
  animation-duration: ${duration}s;
  animation-iteration-count: infinite;
`;

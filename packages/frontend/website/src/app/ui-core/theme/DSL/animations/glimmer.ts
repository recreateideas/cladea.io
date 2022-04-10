import { keyframes, css } from "styled-components";

const keyFrames =
  ({ size, brightness }: { size: number; brightness: number }) =>
  () => {
    return keyframes`
  0%, 20%, 40%, 100% {
    box-shadow:none;
  }
  60%, 80% {
    box-shadow: 0px 0px ${size}px 1px rgba(${brightness},${brightness},${brightness},0.73);
  }`;
  };

export const glimmer = ({
  duration,
  size,
  brightness,
}: {
  duration: number;
  size: number;
  brightness: number;
}) => css`
  animation-name: ${keyFrames({ size, brightness })};
  animation-duration: ${duration}s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
`;

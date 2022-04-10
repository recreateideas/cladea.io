import styled, { css } from "styled-components";
import { ColorCode } from "src/app/ui-core";

interface ContainerProps {
  rotate?: number;
  fill: string;
  containerSize?: string;
  backgroundFill: string;
  preserveColor?: boolean;
}

export const Container = styled.div<ContainerProps>`
  transition: all 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => {
    const { rotate, fill, containerSize, backgroundFill, preserveColor } =
      props;
    return css`
      ${containerSize &&
      css`
        width: ${containerSize};
        height: ${containerSize};
      `}
      ${!preserveColor &&
      css`
        svg path:first-of-type,
        svg rect:not(:last-of-type) {
          fill: ${fill};
        }
      `}
            ${backgroundFill &&
      css`
        svg #background-fill {
          fill: ${backgroundFill};
        }
      `}
            ${rotate && `transform: rotate(${props.rotate}deg);`}
            position: relative;
      transition: all 0.3s;
    `;
  }}
`;

interface ColorMap {
  [type: string]: ColorCode;
}

export const Dot = styled.div<{ colorCode: "error" | "activity" | undefined }>`
  ${(props) => {
    const colorMap: ColorMap = {
      error: props.theme.dsl.palette.fonts.error,
      activity: props.theme.dsl.palette.secondary.neon[500],
    };

    return css`
      position: absolute;
      height: ${props.theme.dsl.layout.spacing.base};
      width: ${props.theme.dsl.layout.spacing.base};
      ${props.colorCode &&
      css`
        background: ${colorMap[props.colorCode]};
      `};
      border-radius: ${props.theme.dsl.layout.spacing.xsmall};
      top: 0;
      right: 0;
    `;
  }}
`;

import { get as getPath } from "lodash";
import { withTheme } from "styled-components";
import svgs from "./svgs";
import { Container, Dot } from "./styledComponents";
import { Theme } from "src/app/ui-core";

export interface SVGIconProps {
  theme: Theme;
  className?: string;
  name?: string;
  size?: string;
  color?: string;
  colorPath?: string;
  fillBackgroundPath?: string;
  onClick?: () => any;
  dotColorCode?: "activity" | "error";
  rotate?: number;
  containerSize?: string;
  fillBackgroundColor?: string;
  preserveColor?: boolean;
}
export const SVGIcon = withTheme((props: SVGIconProps) => {
  const {
    className = "",
    theme,
    name = "alert",
    size: sizeName = "small",
    color: colorProp,
    colorPath,
    fillBackgroundPath,
    onClick,
    dotColorCode,
    containerSize,
    rotate,
    fillBackgroundColor,
    preserveColor,
  } = props;
  // default color for all SVGs has to be fonts.secondary
  const color = colorProp || theme.dsl.palette.fonts.secondary;
  const Icon = svgs[name.toLowerCase()];
  const {
    dsl: {
      sizes: { icons: sizes },
    },
  } = theme;
  const size = sizes[sizeName];
  const fillColor = colorPath ? getPath(theme.dsl.palette, colorPath) : color;
  const fill = preserveColor ? undefined : fillColor;
  const backgroundFill = fillBackgroundPath
    ? getPath(theme.dsl.palette, fillBackgroundPath)
    : fillBackgroundColor;
  return (
    <Container
      className={`svg-icon ${name.toLowerCase()} ${className} `}
      {...{
        onClick,
        fill,
        rotate,
        containerSize: containerSize || size,
        backgroundFill,
        preserveColor,
      }}
    >
      <Icon width={size} height={size} />
      {dotColorCode && <Dot {...{ colorCode: dotColorCode }} />}
    </Container>
  );
});

import paletteFactory from "../palette";
import { family, sizes } from "./styles";
import {
  ThemeMode,
  ThemeFont,
  ThemeFontTypes,
  ThemeFontOptions,
} from "src/app/ui-core";

export const typefaceFactory = (mode: ThemeMode): ThemeFontTypes => {
  const { fonts } = paletteFactory(mode);
  return {
    h0: ({
      color = "primary",
      weight: fontWeight = 100,
    }: ThemeFontOptions = {}): ThemeFont => ({
      fontFamily: family.primary,
      ...sizes.heading0,
      color: fonts[color],
      fontWeight,
    }),
    h1: ({
      color = "primary",
      weight: fontWeight = 400,
    }: ThemeFontOptions = {}): ThemeFont => ({
      fontFamily: family.primary,
      ...sizes.heading1,
      color: fonts[color],
      fontWeight,
    }),
    h2: ({
      color = "primary",
      weight: fontWeight = 400,
    }: ThemeFontOptions = {}): ThemeFont => ({
      fontFamily: family.primary,
      ...sizes.heading2,
      color: fonts[color],
      fontWeight,
    }),
    h3: ({
      color = "primary",
      weight: fontWeight = 400,
    }: ThemeFontOptions = {}): ThemeFont => ({
      fontFamily: family.primary,
      ...sizes.heading0,
      color: fonts[color],
      fontWeight,
    }),
    p: ({
      color = "primary",
      weight: fontWeight = 400,
    }: ThemeFontOptions = {}): ThemeFont => ({
      fontFamily: family.primary,
      ...sizes.paragraph,
      color: fonts[color],
      fontWeight,
    }),
    subHeading: ({
      textTransform = "uppercase",
      color = "secondary",
      weight: fontWeight = 500,
    }: ThemeFontOptions = {}): ThemeFont => ({
      fontFamily: family.primary,
      ...sizes.subHeading,
      color: fonts[color],
      fontWeight,
      textTransform,
    }),
    label: ({
      color = "primary",
      weight: fontWeight = 400,
    }: ThemeFontOptions = {}): ThemeFont => ({
      fontFamily: family.primary,
      ...sizes.label,
      color: fonts[color],
      fontWeight,
    }),
    caption: ({
      color = "secondary",
      weight: fontWeight = 400,
      textTransform = "initial",
    }: ThemeFontOptions = {}): ThemeFont => ({
      fontFamily: family.primary,
      ...sizes.caption,
      color: fonts[color],
      textTransform,
      fontWeight,
    }),
  };
};

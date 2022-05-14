import hexToRgba from "hex-rgba";
import { primary } from "../common";
import { getAlpha } from "../helpers";
import { Palette } from "src/app/ui-core";

const primaryBg = "#191c24";
const lightPrimaryBg = "#ffffff";

export const neutrals: Palette["neutrals"] = {
  secondaryText: "#6f7f92",
  inactive: "#465265",
  borders: "#373946",
  primaryBg,
  primaryBg70: hexToRgba(primaryBg, 70),
  secondaryBg: "#16161b",
  tertiaryBg: "#1f2229",
  quaternaryBg: "#171a21",
  boxShadow: (color = lightPrimaryBg) =>
    `${getAlpha(color, "5%")} 0px 8px 20px 0px`,
};

export const fonts: Palette["fonts"] = {
  primary: primary.white,
  primaryInverted: primaryBg,
  secondary: neutrals.secondaryText,
  inactive: neutrals.inactive,
  inverted: primary.darkIndigo[500],
};

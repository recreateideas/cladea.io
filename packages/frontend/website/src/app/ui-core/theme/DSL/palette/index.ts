import * as common from "./common";
import * as modes from "./modes";
import { ThemeMode, Palette } from "src/app/ui-core";

const paletteFactory = (mode: ThemeMode): Palette => {
  const { neutrals, fonts: modeFontsColors } = modes[mode];
  const {
    brand,
    primary,
    secondary,
    tertiary,
    fonts: commonFontsColors,
  } = common;
  return {
    brand,
    primary,
    secondary,
    tertiary,
    neutrals,
    fonts: {
      ...commonFontsColors,
      ...modeFontsColors,
    },
  };
};

export default paletteFactory;

import * as layout from "./layout";
import * as sizes from "./sizes";
import * as styles from "./styles";
import { themeCss } from "./css";
import * as animations from "./animations";
import paletteFactory from "./palette";
import typefaceFactory from "./typography";
import muiThemeFactory from "./MUI";
import { ThemeMode } from "src/app/ui-core";
import { Theme } from "src/app/ui-core";
import { sizes as fontSizes } from "./typography/styles";
import hexToRgba from "hex-rgba";

export const createTheme = (mode: ThemeMode = "light") => {
  const palette = paletteFactory(mode);
  const typefaces = typefaceFactory(mode);
  const dsl = {
    palette,
    layout,
    sizes,
    styles,
    animations,
    hexToRgba,
    css: themeCss,
    typography: {
      sizes: fontSizes,
      typefaces,
    },
  };
  const muiTheme = muiThemeFactory(palette, mode);
  const theme: Theme = { dsl, muiTheme };
  window.theme = theme;
  return theme;
};

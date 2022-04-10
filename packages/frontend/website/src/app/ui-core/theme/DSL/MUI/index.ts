import muiPaletteFactory from "./palette";
import { Theme as MuiTheme, createTheme } from "@mui/material/styles";
import muiCss from "./css";
import { Palette, ThemeMode } from "src/app/ui-core";

const muiThemeFactory = (palette: Palette, mode: ThemeMode): MuiTheme => {
  const muiTheme = {
    palette: muiPaletteFactory(palette, mode),
    muiCss,
  };
  return createTheme(muiTheme);
};

export default muiThemeFactory;

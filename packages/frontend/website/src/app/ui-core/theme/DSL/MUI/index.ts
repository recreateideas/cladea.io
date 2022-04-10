import muiPaletteFactory from './palette';
import { Theme as MuiTheme, createTheme } from '@mui/material/styles';
import muiCss from './css';
import { Palette, ThemeMode } from '@types';

const muiThemeFactory = (palette: Palette, mode: ThemeMode): MuiTheme => {
    const muiTheme = {
        palette: muiPaletteFactory(palette, mode),
        muiCss,
    };
    return createTheme(muiTheme);
};

export default muiThemeFactory;

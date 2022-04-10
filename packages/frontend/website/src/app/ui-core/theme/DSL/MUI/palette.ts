import { Palette, ThemeMode } from '@types';

const muiPaletteFactory = (palette: Palette, mode: ThemeMode) => {
    const { brand, fonts, secondary } = palette;
    return {
        mode,
        primary: {
            // light: will be calculated from palette.primary.main,
            main: brand.primary[500],
            contrastText: fonts.primary,
            dark: fonts.primary,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: secondary.neon[400],
            main: secondary.neon[500],
            // dark: will be calculated from palette.secondary.main,
        },
        text: {
            primary: fonts.primary,
            secondary: fonts.secondary,
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    };
};

export default muiPaletteFactory;

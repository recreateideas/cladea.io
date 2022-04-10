import { Palette, ThemeColor } from '@types';

export const primary = {
    ice: {
        50: '#FFFFFF',
        100: '#EBF8FF',
        200: '#99DBFF',
        300: '#85D6FF',
        400: '#70CFFF',
        500: '#00ACFF',
        600: '#0096E0',
        700: '#005F8F',
        800: '#003652',
        900: '#001B29',
    } as ThemeColor,
    purple: {
        50: '#EFE4F9',
        100: '#D8BCF0',
        200: '#BE90E6',
        300: '#A364DB',
        400: '#9042D4',
        500: '#7C21CC',
        600: '#741DC7',
        700: '#6918C0',
        800: '#5F14B9',
        900: '#4C0BAD',
    } as ThemeColor,
    darkIndigo: {
        50: '#E4E3EA',
        100: '#BCB9CB',
        200: '#908AA8',
        300: '#645B85',
        400: '#42386B',
        500: '#211551',
        600: '#1D124A',
        700: '#180F40',
        800: '#140C37',
        900: '#0B0627',
    } as ThemeColor,
    royalBlueDark: {
        500: '#031A51',
    } as ThemeColor,
    white: '#ffffff',
};

export const secondary = {
    red: {
        50: '#FEE4EC',
        100: '#FDBBD0',
        200: '#FC8EB0',
        300: '#FB6090',
        400: '#FA3E79',
        500: '#F91C61',
        600: '#f81959',
        700: '#F7144F',
        800: '#F61145',
        900: '#F50933',
    } as ThemeColor,
    orange: {
        50: '#FFEEEA',
        100: '#FED5CB',
        200: '#FEB9A8',
        300: '#FD9D85',
        400: '#FC886B',
        500: '#FC7351',
        600: '#FC6B4A',
        700: '#FB6040',
        800: '#FB5637',
        900: '#FA4327',
    } as ThemeColor,
    green: {
        50: '#E2F9F4',
        100: '#B7EFE4',
        200: '#87E4D2',
        300: '#57D9C0',
        400: '#33D1B3',
        500: '#0FC9A5',
        600: '#0DC39D',
        700: '#0BBC93',
        800: '#08B58A',
        900: '#04A979',
    } as ThemeColor,
    neon: {
        50: '#E3FAFE',
        100: '#B8F3FD',
        200: '#89ECFB',
        300: '#59E4F9',
        400: '#36DEF8',
        500: '#12D8F7',
        600: '#10D4F6',
        700: '#0DCEF5',
        800: '#0AC8F3',
        900: '#05BFF1',
    } as ThemeColor,
    yellow: {
        50: '#FFFAE9',
        100: '#FFF4C7',
        200: '#FFECA2',
        300: '#FEE47C',
        400: '#FEDF60',
        500: '#FED944',
        600: '#FED53E',
        700: '#FECF35',
        800: '#FECA2D',
        900: '#FDC01F',
    } as ThemeColor,
};

export const tertiary = {
    blue: {
        50: '#E8ECFD',
        100: '#C7D0FA',
        200: '#A1B0F7',
        300: '#7B90F3',
        400: '#5F79F1',
        500: '#4361EE',
        600: '#3D59EC',
        700: '#344FE9',
        800: '#2C45E7',
        900: '#1E33E2',
    } as ThemeColor,
    pink: {
        50: '#FDE6F9',
        100: '#F9C2EF',
        200: '#F699E5',
        300: '#F270DB',
        400: '#EF51D3',
        500: '#EC32CB',
        600: '#EA2DC6',
        700: '#E726BE',
        800: '#E41FB8',
        900: '#DF13AC',
    } as ThemeColor,
    brown: {
        50: '#F2EAE7',
        100: '#DFCBC3',
        200: '#CAA99B',
        300: '#B48673',
        400: '#A46C55',
        500: '#945237',
        600: '#8C4B31',
        700: '#81412A',
        800: '#773823',
        900: '#652816',
    } as ThemeColor,
    grey: {
        50: '#EFEFEF',
        100: '#D7D7D7',
        200: '#BDBDBD',
        300: '#A3A3A3',
        400: '#8F8F8F',
        500: '#7B7B7B',
        600: '#737373',
        700: '#686868',
        800: '#5E5E5E',
        900: '#4B4B4B',
    } as ThemeColor,
};

export const brand = {
    primary: secondary.neon,
} as Palette['brand'];

export const fonts = {
    info: brand.primary,
    success: secondary.green[500],
    warn: secondary.orange[500],
    error: secondary.red[900],
};

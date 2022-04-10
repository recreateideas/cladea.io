import { ReactNode, ReactElement } from 'react';
import { createTheme } from '../DSL';
import { ThemeMode } from '@types';
import { GlobalStyle } from '../GlobalStyle';
import { ThemeProvider as ThemeProviderMui } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

interface IProps {
    mode?: ThemeMode;
    children: ReactNode;
}

type WrapperWithThemeContext = ReactElement;

export const ThemeProvider = (props: IProps): WrapperWithThemeContext => {
    const { mode = 'light', children } = props;
    const { dsl, muiTheme } = createTheme(mode);
    return (
        <StyledThemeProvider theme={{ muiTheme, dsl }}>
            <ThemeProviderMui {...{ theme: { ...muiTheme, dsl } }}>{children}</ThemeProviderMui>
            <GlobalStyle />
        </StyledThemeProvider>
    );
};

import { ReactNode, ReactElement } from "react";
import { createTheme } from "../DSL";
import { ThemeMode } from "src/app/ui-core";
import { GlobalStyle } from "../GlobalStyle";
import { ThemeProvider as ThemeProviderMui } from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { UserAgent } from "src/redux";

interface IProps {
  mode?: ThemeMode;
  userAgent?: UserAgent;
  children: ReactNode;
}

type WrapperWithThemeContext = ReactElement;

export const ThemeProvider = (props: IProps): WrapperWithThemeContext => {
  const { mode = "dark", userAgent, children } = props;
  const { dsl, muiTheme } = createTheme(mode);
  return (
    <StyledThemeProvider theme={{ muiTheme, dsl, userAgent }}>
      <ThemeProviderMui {...{ theme: { ...muiTheme, dsl } }}>
        {children}
      </ThemeProviderMui>
      <GlobalStyle />
    </StyledThemeProvider>
  );
};

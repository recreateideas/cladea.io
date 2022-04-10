import { createGlobalStyle } from "styled-components";
import { Theme } from "src/app/ui-core/theme";

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  html, body, #root {
    height: 100%;
    width: 100%;
    flex-direction: column;
    overflow: hidden;
    ${(props) => props.theme.dsl.css}
    ${(props) => props.theme.muiTheme.muiCss}
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0;
    margin: 0;
  }
  #root {
    display: flex;
  }
  .is-draggable:hover {
    cursor: grab !important;
    &.dragging, & .dragging {
      cursor: grabbing !important;
    }
  }

  .flex {
    display: flex;
    width: 100%;
    &.column {
      flex-direction: column;
    }
    &.row {
      flex-direction: row;
    }
    &.center {
        justify-content: center;
      }
  }
`;

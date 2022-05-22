import hexToRgba from "hex-rgba";
import styled, { css, FlattenInterpolation } from "styled-components";

interface StylesMap {
  [type: string]: FlattenInterpolation<any>;
}

export const Container = styled.div<{
  type: "overlay";
  from?: "left" | "right";
}>`
  height: 100%;
  width: auto;
  display: flex;
  ${(props) => {
    const {
      type,
      from = "left",
      theme: {
        dsl: {
          palette,
          layout: { namedZIndex },
        },
      },
    } = props;
    const flexDirection = from === "left" ? "row" : "row-reverse";
    const styles: StylesMap = {
      overlay: css`
        position: absolute;
        z-index: ${namedZIndex.leftSidebar};
        ${from}: 0px;
        flex-direction: ${flexDirection};
      `,
    };
    return css`
      ${styles[type]}
      .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: ${hexToRgba(palette.neutrals.secondaryBg, 40)};
        z-index: ${namedZIndex.leftSidebar - 1};
      }
      .click-outside {
        height: 100%;
      }
      .sidebar-wrapper {
        height: 100%;
      }
    `;
  }}
`;

export const Content = styled.div<{
  isOpen: boolean;
  width?: number;
  from?: "left" | "right";
}>`
  ${(props) => {
    const {
      isOpen,
      width = 200,
      from = "left",
      theme: {
        dsl: {
          layout: { namedZIndex },
          palette: {
            neutrals: { borders, secondaryBg, boxShadow },
          },
        },
      },
    } = props;
    const borderSide = from === "left" ? "right" : "left";
    const styles: StylesMap = {
      true: css`
                width: ${width}px;
                border-${borderSide}: solid 1px ${borders};
                box-shadow: ${boxShadow()};
            `,
      false: css`
        width: 0px;
        overflow: hidden;
      `,
    };
    return css`
      height: 100%;
      background-color: ${secondaryBg};
      transition: width 0.2s ease-in-out;
      z-index: ${namedZIndex.leftSidebar};
      ${styles[`${isOpen}`]}
    `;
  }}
`;

export const Handle = styled.div`
  position: relative;
  height: fit-content;
  border-radius: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  ${(props) => {
    const {
      theme: {
        dsl: { layout },
      },
    } = props;
    return css`
      top: ${layout.margin.xsmall};
      z-index: ${layout.namedZIndex.leftSidebar};
    `;
  }}
`;

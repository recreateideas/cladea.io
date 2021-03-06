import styled, { css } from "styled-components";

const headerHeight = "14vh";
export const Container = styled.div.attrs({
  className: "page-structure",
})<{
  margin: number;
  breakpoint: string;
  hasBodyYScrolled1?: boolean;
  hasBodyYScrolled2?: boolean;
}>`
  ${(props) => {
    const {
      theme: {
        dsl: { typography, palette },
      },
      margin,
      breakpoint,
      hasBodyYScrolled1,
      hasBodyYScrolled2,
    } = props;
    return css`
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      margin: 0 ${margin}px;
      ${hasBodyYScrolled2 &&
      css`
        height: calc(100% + ${headerHeight});
      `}
      .header {
        position: relative;
        min-height: ${headerHeight};
        top: 0px;
        background-color: ${palette.neutrals.tertiaryBg};
        display: flex;
        justify-content: center;
        flex-direction: column;
        transition: all 0.3s;
        ${hasBodyYScrolled2 &&
        css`
          top: -${headerHeight};
        `}
        .header-content {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          display: flex;
          ${typography.typefaces.h0()}
          ${hasBodyYScrolled1 &&
          !hasBodyYScrolled2 &&
          css`
            box-shadow: 0px 5px 20px -7px ${palette.neutrals.borders};
            clip-path: inset(0px 0px -25px 0px);
          `}
          .header-title {
            width: 100%;
            text-align: center;
            margin: auto;
          }
        }
        &:after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: -7vh;
          height: 30vh;
          width: 200%;
          border-bottom-left-radius: 100%;
          border-bottom-right-radius: 100%;
          transform: translateX(-25%);
          background-color: ${palette.neutrals.tertiaryBg};
          z-index: 0;
        }
      }
      .body {
        position: relative;
        height: 100%;
        padding: 2vh ${breakpoint === "sm" ? "5vw" : "0"};
        padding-bottom: 5vh;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        overflow-x: hidden;
        top: 0px;
        ${hasBodyYScrolled2 &&
        css`
          top: -${`${parseInt(headerHeight) - 2}vh`};
          padding-top: ${headerHeight};
          height: calc(100% - ${headerHeight});
        `}
        .body-main-content {
          flex-direction: column;
          gap: 3vh;
          position: relative;
          width: 100%;
          display: flex;
          .contained-section {
            width: 100%;
            border-radius: 64px;
            min-height: 400px;
            background-color: ${palette.neutrals.quaternaryBg};
            border: solid 1px ${palette.neutrals.borders};
            box-shadow: ${palette.neutrals.boxShadow(
              palette.tertiary.pink[500]
            )};
          }
        }
      }
      .footer {
        /* margin-bottom: 5vh; */
      }
      .h0 {
        ${typography.typefaces.h0()}
      }
      .h1 {
        ${typography.typefaces.h1()}
      }
      .h2 {
        ${typography.typefaces.h2()}
      }
      .h3 {
        ${typography.typefaces.h3()}
      }
    `;
  }}
`;

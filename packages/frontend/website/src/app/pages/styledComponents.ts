import styled, { css } from "styled-components";

export const PageStructure = styled.div.attrs({
  className: "page-structure",
})`
  ${(props) => {
    const {
      theme: {
        dsl: { palette },
      },
    } = props;
    return css`
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      overflow-x: hidden;
      box-sizing: border-box;
      .header {
        position: relative;
        min-height: 16vh;
        background-color: ${palette.neutrals.tertiaryBg};
        &:before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: -5vh;
          height: 33vh;
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
        margin: 5vw;
        box-sizing: border-box;
        display: flex;
        .body-main-content {
          flex-direction: column;
          gap: 3vh;
          position: relative;
          height: 100%;
          width: 100%;
          display: flex;
          .section {
            width: 100%;
            border-radius: 64px;
            border: solid 1px white;
            min-height: 400px;
          }
        }
      }
      .footer {
        margin-bottom: 5vh;
      }
    `;
  }}
`;

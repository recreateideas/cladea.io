import styled, { css } from "styled-components";
import { avatar } from "../images";

export const Container = styled.div<{ breakpoint: string }>`
  ${(props) => {
    const {
      theme: {
        dsl: { palette },
      },
      breakpoint,
    } = props;
    const width = breakpoint === "sm" ? "100%" : "30vw";
    return css`
      border-radius: 12px;
      /* height: 600px; */
      min-width: ${width};
      background-color: ${palette.neutrals.quaternaryBg};
      border: solid 1px ${palette.neutrals.borders};
      overflow: hidden;
      .background {
        width: 100%;
        height: 60vh;
        fill: ${palette.neutrals.secondaryBg};
      }
      z-index: 1000;
      .avatar {
        position: relative;
        border-radius: 100%;
        overflow: hidden;
        background: ${palette.neutrals.primaryBg};
        width: 220px;
        height: 220px;
        margin: 24px auto;
        .image-container {
          border-radius: 100%;
          overflow: hidden;
          width: inherit;
          height: inherit;
          background-image: url(${avatar});
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .space {
          background: unset !important;
        }
      }
      .name {
        display: flex;
        letter-spacing: 1px;
        justify-content: center;
        gap: 16px;
        .first {
        }
        .last {
          color: ${palette.tertiary.pink[500]};
        }
      }
      .position {
        width: 100%;
        .title {
          color: ${palette.secondary.neon[500]};
          text-align: center;
        }
      }
      .contacts {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin: 24px;
        padding: 32px;
        border: solid 1px ${palette.neutrals.borders};
        border-radius: 8px;
        background-color: ${palette.neutrals.secondaryBg};
        .contact-container {
          width: 100%;
          /* height: 40px; */
          display: flex;
          justify-content: center;
          .href-container {
            text-decoration: none;
            display: flex;
            gap: 16px;
            color: ${palette.fonts.primary};
            img {
              width: 36px;
            }
            .href-text {
              display: flex;
              flex-direction: column;
              justify-content: center;
              width: 80px;
            }
          }
        }
      }
    `;
  }};
`;

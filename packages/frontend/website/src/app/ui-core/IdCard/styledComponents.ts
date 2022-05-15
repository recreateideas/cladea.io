import styled, { css } from "styled-components";
import { avatar } from "../images";

export const Container = styled.div<{ breakpoint: string }>`
  ${(props) => {
    const {
      theme: {
        dsl: { layout, palette },
      },
      breakpoint,
    } = props;
    const isSmall = breakpoint === "sm";
    const width = isSmall ? "100%" : "30vw";
    return css`
      border-radius: 12px;
      min-width: ${width};
      background-color: ${palette.neutrals.quaternaryBg};
      border: solid 1px ${palette.neutrals.borders};
      overflow: hidden;
      .background {
        width: 100%;
        height: 60vh;
        fill: ${palette.neutrals.secondaryBg};
      }
      z-index: ${layout.namedZIndex.leftSidebar - 1};
      .bio {
        display: flex;
        flex-direction: column;
      }
      .avatar {
        position: relative;
        border-radius: 100%;
        overflow: hidden;
        background: ${palette.neutrals.primaryBg};
        width: 20vh;
        height: 20vh;
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
        margin: ${isSmall ? "2vh" : "24px"} 24px;
        padding: ${isSmall ? "2vh" : "24px"};
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
            cursor: pointer;
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

export const ToastContainer = styled.div`
  ${(props) => {
    const {
      theme: {
        dsl: { palette },
      },
    } = props;
    return css`
      .toast {
        display: block;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translateX(-50%);
        min-width: 450px;
        background-color: ${palette.neutrals.quaternaryBg};
        box-shadow: ${palette.neutrals.boxShadow(palette.secondary.neon[500])};
        border: solid 1px ${palette.neutrals.borders};
        .btn-close {
          color: ${palette.fonts.primary};
          background-color: ${palette.secondary.neon[500]};
        }
        .toast-header {
          justify-content: space-between;
          background-color: ${palette.neutrals.primaryBg};
          button {
            margin-right: 0;
          }
          .header-title {
            font-weight: 600;
            width: 100%;
            color: ${palette.secondary.neon[500]};
          }
        }

        .body-content {
          width: 100%;
          display: flex;
          justify-content: space-between;
          .copied-value {
            color: ${palette.tertiary.pink[500]};
          }
        }
      }
    `;
  }};
`;

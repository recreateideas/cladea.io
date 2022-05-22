import styled, { css } from "styled-components";
import { Container as ContainerBS } from "react-bootstrap";

export const Container = styled(ContainerBS)<{ margin: number }>`
  ${(props) => {
    const {
      theme: {
        dsl: { layout, palette },
      },
      margin,
    } = props;
    return css`
      max-width: unset !important;
      padding: 0;
      z-index: ${layout.namedZIndex.mainHeader};
      border-bottom: solid 1px ${palette.neutrals.borders};
      position: relative;
      .navbar {
        padding: 8px ${margin}px;
        background-color: ${palette.neutrals.secondaryBg};
        .brand-link {
          display: flex;
          gap: 8px;
        }
        .nav-brand {
          display: flex;
          justify-content: center;
          flex-direction: column;
          margin-right: 24px;
          letter-spacing: 1px;
        }
        .navigation {
          display: flex;
          width: 100%;
          gap: 32px;
          .styled-link-container {
            flex-direction: column;
            justify-content: center;
          }
        }
      }
    `;
  }}
`;

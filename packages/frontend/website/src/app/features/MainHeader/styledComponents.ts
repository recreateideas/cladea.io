import styled, { css } from "styled-components";
import { Container as ContainerBS } from "react-bootstrap";

export const Container = styled(ContainerBS)`
  ${(props) => {
    const {
      theme: {
        dsl: { layout, palette },
      },
    } = props;
    return css`
      max-width: unset !important;
      padding: 0;
      z-index: ${layout.namedZIndex.mainHeader};
      border-bottom: solid 1px ${palette.neutrals.borders};
      position: relative;
      .navbar {
        padding: 8px;
        .brand-link {
          display: flex;
          gap: 8px;
        }
        .nav-brand {
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
        .navigation {
          display: flex;
          gap: 16px;
          width: 100%;
        }
      }
    `;
  }}
`;

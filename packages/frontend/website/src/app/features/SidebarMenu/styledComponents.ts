import styled, { css } from "styled-components";
import { Container as ContainerBS } from "react-bootstrap";

export const Container = styled(ContainerBS)`
  ${(props) => {
    const {
      theme: {
        dsl: { palette },
      },
    } = props;
    return css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .top-logo {
        display: flex;
        justify-content: center;
      }
      .nav-brand {
        border-bottom: solid 2px ${palette.neutrals.borders};
        text-align: center;
        letter-spacing: 1px;
        padding-bottom: 8px;
      }
      .navigation {
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        gap: 24px;
      }
    `;
  }}
`;

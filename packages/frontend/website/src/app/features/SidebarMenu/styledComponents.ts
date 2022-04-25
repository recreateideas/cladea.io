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
        border-bottom: solid 2px ${palette.neutrals.borders};
      }
    `;
  }}
`;

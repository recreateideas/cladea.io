import styled, { css } from "styled-components";

export const Container = styled.div`
  ${(props) => {
    const {
      theme: {
        dsl: { palette },
      },
    } = props;
    return css`
      height: 100%;
      width: 100%;
      position: relative;
      display: flex;
      .contained-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .content {
          margin: auto;
        }
      }
      .wip {
        color: ${palette.secondary.neon[500]};
        text-align: center;
      }
      .come-back {
        color: ${palette.tertiary.pink[500]};
        text-align: center;
      }
    `;
  }};
`;

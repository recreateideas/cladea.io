import styled, { css } from "styled-components";

export const Container = styled.div`
  ${(props) => {
    const {
      theme: {
        dsl: { hexToRgba, palette },
      },
    } = props;
    return css`
      width: 100%;
      height: 100%;
      border: solid 2px grey;
      border-radius: 12px;
      box-sizing: border-box;
      background-color: ${hexToRgba(palette.neutrals.primaryBg, 50)};
      .rsm-geography {
        fill: ${palette.primary.purple[900]};
      }
    `;
  }}
`;

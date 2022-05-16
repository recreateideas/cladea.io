import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  ${(props) => {
    const {
      theme: {
        dsl: {
          layout: {
            namedZIndex: { careerTimeline },
          },
        },
      },
    } = props;
    return css`
      .ufo {
        opacity: 0.7;
      }
      .timeline {
        z-index: ${careerTimeline};
      }
    `;
  }};
`;

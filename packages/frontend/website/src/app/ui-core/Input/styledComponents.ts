import styled from "styled-components";
import { CustomCss } from "src/app/ui-core";

export const Container = styled.div<{ customCss?: CustomCss }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${(props) => props.customCss}
`;

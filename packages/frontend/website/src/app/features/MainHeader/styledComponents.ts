import styled from "styled-components";
import { Container as ContainerBS } from "react-bootstrap";

export const Container = styled(ContainerBS)`
  max-width: unset;
  padding: 0;
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
  }
`;

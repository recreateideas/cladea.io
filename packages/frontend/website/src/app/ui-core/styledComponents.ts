import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
  &,
  &:visited,
  &:hover,
  &:active {
    color: white;
    text-decoration: none;
  }
`;

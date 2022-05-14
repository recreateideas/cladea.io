import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledLink = styled(NavLink)`
  &,
  &:visited,
  &:hover,
  &:active {
    color: white;
    text-decoration: none;
  }
`;

export const Container = styled.div<{ isActive?: boolean }>`
  display: flex;
  ${(props) => {
    const {
      theme: {
        dsl: { palette },
      },
      isActive,
    } = props;
    return (
      isActive &&
      css`
        & * {
          color: ${palette.brand.primary[500]} !important;
        }
      `
    );
  }}
`;

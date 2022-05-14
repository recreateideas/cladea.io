import { ReactElement } from "react";
import { NavLinkProps } from "react-router-dom";
import { Container, StyledLink as StyledLinkComp } from "./styledComponents";

interface IProps extends Omit<NavLinkProps, "isActive"> {
  className?: string;
  linkClassName?: string;
  isActive?: boolean;
}
export const StyledLink = (props: IProps): ReactElement => {
  const { to, children, className = "", linkClassName = "", isActive } = props;
  return (
    <Container
      isActive={isActive}
      className={`styled-link-container ${className}`}
    >
      <StyledLinkComp className={`styled-link ${linkClassName}`} to={to}>
        {children}
      </StyledLinkComp>
    </Container>
  );
};

StyledLink.displayName = "StyledLink";

StyledLink.defaultProps = {};

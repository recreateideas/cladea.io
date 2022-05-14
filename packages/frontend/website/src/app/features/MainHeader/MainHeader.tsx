import { ReactElement } from "react";
import { Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { StyledLink } from "src/app/ui-core";
import { logo } from "src/app/ui-core/images";
import { useMargin } from "src/common/hooks";
import { routes } from "src/routes";
import { Container } from "./styledComponents";

interface IProps {}
export const MainHeader = (props: IProps): ReactElement => {
  const { pathname } = useLocation();
  const margin = useMargin();
  return (
    <Container className="main-header" margin={margin}>
      <Navbar className="navbar">
        <Navbar.Brand>
          <StyledLink linkClassName="brand-link" to="/">
            <img
              alt="logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            <div className="nav-brand">cladea.io</div>
          </StyledLink>
        </Navbar.Brand>
        <div className="navigation">
          {routes.map((route, i) => {
            const isActive = pathname === route.path;
            return (
              <StyledLink key={i} to={route.path} isActive={isActive}>
                {route.title}
              </StyledLink>
            );
          })}
        </div>
      </Navbar>
    </Container>
  );
};

MainHeader.displayName = "MainHeader";

MainHeader.defaultProps = {};

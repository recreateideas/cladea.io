import { ReactElement } from "react";
import { Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { StyledLink } from "src/app/ui-core";
import { logo } from "src/app/ui-core/images";
import { useMargin } from "src/common/hooks";
import { selectors, User, useSelector } from "src/redux";
import { routes } from "src/routes";
import { Avatar } from "../Avatar";
import { GoogleSSOButton } from "../GoogleSSOButton";
import { Container } from "./styledComponents";

interface IProps {}
export const MainHeader = (props: IProps): ReactElement => {
  const { pathname } = useLocation();
  const margin = useMargin();
  const { auth: authSelectors } = selectors;
  const user: User = useSelector(authSelectors.user);
  console.log(user);
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
          {routes
            .filter((r) => !r.hidden)
            .map((route, i) => {
              const isActive = pathname === route.path;
              return (
                <StyledLink key={i} to={route.path} isActive={isActive}>
                  {route.title}
                </StyledLink>
              );
            })}
          {/* {!user ? <Avatar /> : <GoogleSSOButton />} */}
        </div>
      </Navbar>
    </Container>
  );
};

MainHeader.displayName = "MainHeader";

MainHeader.defaultProps = {};

import { ReactElement } from "react";
import { Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { StyledLink } from "src/app/ui-core";
import { google, logo } from "src/app/ui-core/images";
import { useMargin } from "src/common/hooks";
import { routes } from "src/routes";
import { Container } from "./styledComponents";

interface IProps {}
export const MainHeader = (props: IProps): ReactElement => {
  const { pathname } = useLocation();
  const margin = useMargin();
  const googleSSO = new URL(
    `https://cladea-io.auth.ap-southeast-2.amazoncognito.com/oauth2/authorize`
  );
  googleSSO.searchParams.append("identity_provider", "Google");
  googleSSO.searchParams.append("redirect_url", "https://www.cladea.io/sso");
  googleSSO.searchParams.append("response_type", "token");
  googleSSO.searchParams.append("client_id", "24197v6jhv76j3a59s5da2iv3v");
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
          <a href={googleSSO.toString()}>
            <img
              src={google}
              alt="google login"
              style={{ width: 24, height: 24, borderRadius: 8 }}
            ></img>
          </a>
        </div>
      </Navbar>
    </Container>
  );
};

MainHeader.displayName = "MainHeader";

MainHeader.defaultProps = {};

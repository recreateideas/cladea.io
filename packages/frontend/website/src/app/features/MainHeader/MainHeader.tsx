import { ReactElement } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { StyledLink } from "src/app/ui-core";
import { logo } from "src/app/ui-core/images";
import { Container } from "./styledComponents";

interface IProps {}
export const MainHeader = (props: IProps): ReactElement => {
  return (
    <Container className="main-header">
      <Navbar className="navbar" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <StyledLink className="brand-link" to="/">
              <img
                alt="logo"
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              <div className="nav-brand">cladea.io</div>
            </StyledLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

MainHeader.displayName = "MainHeader";

MainHeader.defaultProps = {};

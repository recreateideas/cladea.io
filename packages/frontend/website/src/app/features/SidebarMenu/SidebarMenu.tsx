import { ReactElement } from "react";
import { Menu, ChevronLeft } from "@mui/icons-material";
import { Sidebar, StyledLink } from "src/app/ui-core";
import { logo } from "src/app/ui-core/images";
import { Container } from "./styledComponents";
import { routes } from "src/routes";
import { useLocation } from "react-router-dom";

interface IProps {}
export const SidebarMenu = (props: IProps): ReactElement => {
  const openIcon = <Menu style={{ fontSize: "32px" }} />;
  const closeIcon = <ChevronLeft style={{ fontSize: "32px" }} />;
  const { pathname } = useLocation();
  return (
    <Sidebar {...{ width: 200, from: "left", openIcon, closeIcon }}>
      <Container>
        <div className="top-logo">
          <StyledLink className="brand-link" to="/">
            <img
              alt="logo"
              src={logo}
              width="80"
              height="80"
              className="d-inline-block align-top"
            />{" "}
          </StyledLink>
        </div>
        <div className="navigation">
          {routes.map((route, i) => {
            const isActive = pathname === route.path;
            isActive && console.log(route.path, pathname);
            return (
              <StyledLink key={i} to={route.path} isActive={isActive}>
                {route.title}
              </StyledLink>
            );
          })}
        </div>
      </Container>
    </Sidebar>
  );
};

SidebarMenu.displayName = "SidebarMenu";

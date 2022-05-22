import { ReactElement, useRef } from "react";
import { Menu, ChevronLeft } from "@mui/icons-material";
import { Sidebar, SidebarRefHandle, StyledLink } from "src/app/ui-core";
import { logo } from "src/app/ui-core/images";
import { Container } from "./styledComponents";
import { routes } from "src/routes";
import { useLocation } from "react-router-dom";

interface IProps {}
export const SidebarMenu = (props: IProps): ReactElement => {
  const sidebarRef = useRef<SidebarRefHandle>(null);
  const openIcon = <Menu style={{ fontSize: "32px" }} />;
  const closeIcon = <ChevronLeft style={{ fontSize: "32px" }} />;
  const { pathname } = useLocation();
  const onNavClick = () => {
    setTimeout(() => {
      sidebarRef.current?.close();
    }, 300);
  };
  return (
    <Sidebar
      ref={sidebarRef}
      {...{
        width: 200,
        from: "left",
        openIcon,
        closeIcon,
      }}
    >
      <Container>
        <div className="top-logo">
          <StyledLink className="brand-link" to="/">
            <img
              alt="logo"
              src={logo}
              width="80"
              height="80"
              className="d-inline-block align-top"
            />
          </StyledLink>
        </div>
        <div className="nav-brand">cladea.io</div>
        <div className="navigation">
          {routes
            .filter((r) => !r.hidden)
            .map((route, i) => {
              const isActive = pathname === route.path;
              return (
                <StyledLink
                  key={i}
                  to={route.path}
                  isActive={isActive}
                  onClick={onNavClick}
                >
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

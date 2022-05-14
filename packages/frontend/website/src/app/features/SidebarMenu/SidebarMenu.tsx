import { ReactElement } from "react";
import { Menu, ChevronLeft } from "@mui/icons-material";
import { Sidebar, StyledLink } from "src/app/ui-core";
import { logo } from "src/app/ui-core/images";
import { Container } from "./styledComponents";

interface IProps {}
export const SidebarMenu = (props: IProps): ReactElement => {
  const openIcon = <Menu style={{ fontSize: "32px" }} />;
  const closeIcon = <ChevronLeft style={{ fontSize: "32px" }} />;
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
      </Container>
    </Sidebar>
  );
};

SidebarMenu.displayName = "SidebarMenu";

import { ReactElement } from "react";
import { Menu, ChevronLeft } from "@mui/icons-material";
import { Sidebar } from "src/app/ui-core";

interface IProps {}
export const SidebarMenu = (props: IProps): ReactElement => {
  const openIcon = <Menu />;
  const closeIcon = <ChevronLeft />;
  return (
    <Sidebar {...{ width: 200, from: "left", openIcon, closeIcon }}>
      menu
    </Sidebar>
  );
};

SidebarMenu.displayName = "SidebarMenu";

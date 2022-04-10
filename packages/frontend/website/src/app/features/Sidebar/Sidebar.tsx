import { ReactElement } from "react";
import { Menu, ChevronLeft } from "@mui/icons-material";
import { Sidebar as SidebarCore } from "src/app/ui-core";

interface IProps {}
export const Sidebar = (props: IProps): ReactElement => {
  const openIcon = <Menu />;
  const closeIcon = <ChevronLeft />;
  return (
    <SidebarCore {...{ width: 200, from: "left", openIcon, closeIcon }}>
      menu
    </SidebarCore>
  );
};

Sidebar.displayName = "Sidebar";

Sidebar.defaultProps = {};

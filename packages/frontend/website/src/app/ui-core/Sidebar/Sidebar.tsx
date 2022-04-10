import { ReactNode, useState, ReactElement } from "react";
import { IconButton } from "src/app/ui-core";
import { ChevronRight, ChevronLeft } from "@mui/icons-material";
import { Container, Content, Handle } from "./styledComponents";

interface IProps {
  children: ReactNode;
  type?: "overlay";
  width?: number;
  from?: "left" | "right";
  openIcon?: ReactElement;
  closeIcon?: ReactElement;
}
export const Sidebar = (props: IProps): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {
    children,
    type = "overlay",
    width = 200,
    from = "left",
    openIcon = <ChevronLeft />,
    closeIcon = <ChevronRight />,
  } = props;
  const onToggle = () => setIsOpen((o) => !o);
  return (
    <Container className="sidebar" {...{ type, width, from }}>
      <Content className="sidebar-content" {...{ isOpen, width, from }}>
        <div>{children}</div>
      </Content>
      <Handle className="sidebar-handle" {...{ onClick: onToggle }}>
        <IconButton color="secondary">
          {isOpen ? closeIcon : openIcon}
        </IconButton>
      </Handle>
    </Container>
  );
};

Sidebar.displayName = "Sidebar";

Sidebar.defaultProps = {
  type: "overlay",
};

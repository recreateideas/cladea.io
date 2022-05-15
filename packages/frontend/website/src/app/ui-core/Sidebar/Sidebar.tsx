import {
  ReactNode,
  useState,
  ReactElement,
  useImperativeHandle,
  Ref,
  forwardRef,
} from "react";
import { IconButton } from "src/app/ui-core";
import { ChevronRight, ChevronLeft } from "@mui/icons-material";
import { Container, Content, Handle } from "./styledComponents";
import { ClickOutside } from "src/common/hooks";
import { useSwipeable } from "react-swipeable";

export type SidebarRefHandle = { open: () => void; close: () => void };
interface IProps {
  children: ReactNode;
  type?: "overlay";
  width?: number;
  from?: "left" | "right";
  openIcon?: ReactElement;
  closeIcon?: ReactElement;
}
export const Sidebar = forwardRef(
  (props: IProps, ref: Ref<any>): ReactElement => {
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
    const handlers = useSwipeable({
      onSwipedLeft: setIsOpen.bind(null, false),
    });
    useImperativeHandle(ref, () => ({
      close: () => setIsOpen(false),
      open: () => setIsOpen(false),
    }));
    return (
      <Container className="sidebar" {...{ type, width, from, ...handlers }}>
        {isOpen && <div className="backdrop" />}
        <Content
          ref={ref}
          className="sidebar-content"
          {...{ isOpen, width, from }}
        >
          <ClickOutside callback={setIsOpen.bind(null, false)}>
            <div>{children}</div>
          </ClickOutside>
        </Content>

        <Handle className="sidebar-handle" {...{ onClick: onToggle }}>
          <IconButton color="secondary">
            {isOpen ? closeIcon : openIcon}
          </IconButton>
        </Handle>
      </Container>
    );
  }
);

Sidebar.displayName = "Sidebar";

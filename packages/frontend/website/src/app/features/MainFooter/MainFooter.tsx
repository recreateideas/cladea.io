import { HomeOutlined } from "@ant-design/icons";
import { MenuOutlined, ReplyOutlined } from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import { ReactElement } from "react";
import { useTheme } from "styled-components";
import { ThemeAndUserAgent } from "src/app/ui-core";
import { actions, useDispatch } from "src/redux";
import { Container } from "./styledComponents";

interface IProps {}
export const MainFooter = (props: IProps): ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();
  const theme = useTheme() as ThemeAndUserAgent;
  const {
    router: { navigateTo },
  } = actions;
  const onBackClick = () => {
    history.goBack();
  };
  const onMenuClick = () => {
    // onClick
  };
  const btns = [
    {
      label: "Home",
      Icon: HomeOutlined,
      onClick: () => dispatch(navigateTo("/")),
    },
    {
      label: "Back",
      Icon: ReplyOutlined,
      onClick: onBackClick,
    },
    {
      Icon: MenuOutlined,
      onClick: onMenuClick,
    },
  ];
  return (
    <Container>
      <div className="buttons">
        {btns.map((btn, i) => {
          const { Icon, onClick } = btn;
          return (
            <div key={i} className="btn" onClick={onClick}>
              <Icon
                style={{
                  fontSize: "32px",
                  color: theme.dsl.palette.secondary.neon[500],
                }}
              />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

MainFooter.displayName = "MainFooter";

MainFooter.defaultProps = {};

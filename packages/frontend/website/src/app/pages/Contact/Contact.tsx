import { ReactElement } from "react";
import {
  IdCard,
  PageStructure,
  Space,
  ThemeAndUserAgent,
} from "src/app/ui-core";
import { logo } from "src/app/ui-core/images";
import { useBreakpoints } from "src/common";
import { Container } from "./styledComponents";
import dayjs from "dayjs";
import { useTheme } from "styled-components";
interface IProps {
  route: any;
}
export const Contact = (props: IProps): ReactElement => {
  const {
    route: { title },
  } = props;
  const breakpoint = useBreakpoints();
  const theme = useTheme() as ThemeAndUserAgent;
  const { isMobile } = theme.userAgent || {};
  return (
    <Container id="contact-page">
      <Space {...{ starsCount: 50, withPlanets: false }} />
      <PageStructure>
        <div className="header">
          <div className="header-content">
            <div className="header-title">{title}</div>
          </div>
        </div>
        <div className="body">
          <div className="body-main-content">
            <IdCard breakpoint={breakpoint} />
          </div>
        </div>
        <div className="footer">
          <div className="logo">
            <img className="d-inline-block align-top" alt="logo" src={logo} />
          </div>
          <div className="copyright">
            All rights reserved. Copyright&nbsp;
            {isMobile && <br />}
            <b>Claudio De Angelis | RecreateIdeas.</b>&nbsp;©&nbsp;
            {dayjs().year()}
          </div>
        </div>
      </PageStructure>
    </Container>
  );
};

Contact.displayName = "Contact";

Contact.defaultProps = {};

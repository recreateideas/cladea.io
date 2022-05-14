import { ReactElement } from "react";
import { Timeline } from "src/app/ui-core";
import { PageStructure } from "../styledComponents";
import { Container } from "./styledComponents";

interface IProps {}
export const Career = (props: IProps): ReactElement => {
  return (
    <Container id="career-page">
      <PageStructure>
        <div className="header">Header</div>
        <div className="body">
          <div className="career-timeline">
            <Timeline />
          </div>
          <div className="body-main-content">
            <div className="section"></div>
            <div className="section"></div>
          </div>
        </div>
        <div className="footer"></div>
      </PageStructure>
    </Container>
  );
};

Career.displayName = "Career";

Career.defaultProps = {};

import { ReactElement } from "react";
import { CareerTimeline } from "src/app/features";
import { PageStructure } from "src/app/ui-core";
import { Container } from "./styledComponents";

interface IProps {
  route: any;
}
export const Career = (props: IProps): ReactElement => {
  const {
    route: { title },
  } = props;
  return (
    <Container id="career-page">
      <PageStructure>
        <div className="header">
          <div className="header-content">
            <div className="header-title">{title}</div>
          </div>
        </div>
        <div className="body">
          <div className="body-main-content">
            <CareerTimeline />
          </div>
        </div>
        <div className="footer"></div>
      </PageStructure>
    </Container>
  );
};

Career.displayName = "Career";

Career.defaultProps = {};

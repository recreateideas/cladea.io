import { ReactElement } from "react";
import { CareerTimeline } from "src/app/features";
import { PageStructure, Space } from "src/app/ui-core";
import { Container } from "./styledComponents";

interface IProps {
  route: any;
}
export const Timeline = (props: IProps): ReactElement => {
  const {
    route: { title },
  } = props;
  return (
    <Container id="career-page">
      <Space {...{ starsCount: 50, withPlanets: false, withUfo: false }} />
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

Timeline.displayName = "Timeline";

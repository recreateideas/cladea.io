import { ReactElement } from "react";
import { PageStructure } from "src/app/ui-core";
import { Container } from "./styledComponents";

interface IProps {
  route: any;
}
export const Tech = (props: IProps): ReactElement => {
  const {
    route: { title },
  } = props;
  return (
    <Container id="tech-page">
      <PageStructure>
        <div className="header">
          <div className="header-content">
            <div className="header-title">{title}</div>
          </div>
        </div>
        <div className="body">
          <div className="body-main-content">
            <div className="contained-section">
              <div className="content">
                <div className="wip h1">Work In Progress</div>
                <div className="come-back h2">come back soon</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer"></div>
      </PageStructure>
    </Container>
  );
};

Tech.displayName = "Tech";

Tech.defaultProps = {};

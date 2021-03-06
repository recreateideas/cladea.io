import { ReactElement } from "react";
import { PageStructure } from "src/app/ui-core";
import { Container } from "./styledComponents";

interface IProps {
  route: any;
}

export const Profile = (props: IProps): ReactElement => {
  const {
    route: { title },
  } = props;
  return (
    <Container id="profile-page">
      <PageStructure>
        <div className="header">
          <div className="header-content">
            <div className="header-title">{title}</div>
          </div>
        </div>
        <div className="body">
          <div className="body-main-content">
            <div className="contained-section"></div>
            <div className="contained-section"></div>
          </div>
        </div>
        <div className="footer"></div>
      </PageStructure>
    </Container>
  );
};

Profile.displayName = "Profile";

Profile.defaultProps = {};

import { ReactElement } from "react";
import { PageStructure } from "../styledComponents";
import { Container } from "./styledComponents";

interface IProps {}
export const Profile = (props: IProps): ReactElement => {
  return (
    <Container id="profile-page">
      <PageStructure>
        <div className="header">Header</div>
        <div className="body">
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

Profile.displayName = "Profile";

Profile.defaultProps = {};

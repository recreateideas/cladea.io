import { ReactElement } from "react";
import { selectors, User, useSelector } from "src/redux";
import { Container } from "./styledComponents";

interface IProps {}
export const Avatar = (props: IProps): ReactElement => {
  const { auth: authSelectors } = selectors;
  const user: User = useSelector(authSelectors.user);
  return (
    <Container>
      <div className="user-picture">
        <img className="user-image" src={user.imageUrl} alt="user" />
      </div>
    </Container>
  );
};

Avatar.displayName = "Avatar";

Avatar.defaultProps = {};

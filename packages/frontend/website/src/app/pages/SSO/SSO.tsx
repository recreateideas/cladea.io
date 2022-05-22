import { ReactElement, useEffect } from "react";
import { actions, useDispatch } from "src/redux";
import { Container } from "./styledComponents";

export const SSO = (): ReactElement => {
  const dispatch = useDispatch();
  const {
    auth: { saveUserData },
  } = actions;

  useEffect(() => {
    const parsedHash = new URLSearchParams(
      window.location.hash.substring(1) // skip the first char (#)
    );
    const idToken = parsedHash.get("id_token");

    if (idToken) {
      dispatch(saveUserData(idToken));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <div>SSO!</div>
    </Container>
  );
};

SSO.displayName = "SSO";

SSO.defaultProps = {};

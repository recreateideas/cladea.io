import { ReactElement, useEffect } from "react";
import { actions, useDispatch } from "src/redux";
import { Container } from "./styledComponents";

export const SSO = (): ReactElement => {
  const dispatch = useDispatch();
  const {
    auth: { exchangeCodeForTokens },
  } = actions;

  useEffect(() => {
    const parsed = new URL(window.location.href);
    const code = parsed.searchParams.get("code");

    if (code) {
      (async () => {
        await exchangeCodeForTokens(code)(dispatch);
      })();
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

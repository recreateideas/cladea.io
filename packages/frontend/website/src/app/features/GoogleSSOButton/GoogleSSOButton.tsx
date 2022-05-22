import { ReactElement } from "react";
import { appConfig } from "src/config";
import { google } from "src/app/ui-core/images";
// import { Container } from './styledComponents';

interface IProps {}
export const GoogleSSOButton = (props: IProps): ReactElement => {
  const googleSSO = new URL(`${appConfig.cognitoUrl}/oauth2/authorize`);
  googleSSO.searchParams.append("identity_provider", "Google");
  googleSSO.searchParams.append("redirect_url", "https://www.cladea.io/sso");
  googleSSO.searchParams.append("response_type", "code");
  googleSSO.searchParams.append("client_id", appConfig.userpoolClientId);
  return (
    <a href={googleSSO.toString()}>
      <img
        src={google}
        alt="google login"
        style={{ width: 24, height: 24, borderRadius: 8 }}
      ></img>
    </a>
  );
};

GoogleSSOButton.displayName = "GoogleSSOButton";

GoogleSSOButton.defaultProps = {};

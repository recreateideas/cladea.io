import { ReactElement } from "react";
import { appConfig } from "src/config";
import { google } from "src/app/ui-core/images";
import { AnchorContainer } from "./styledComponents";

interface IProps {
  variant?: "small-text";
}
export const GoogleSSOButton = (props: IProps): ReactElement => {
  const googleSSO = new URL(`${appConfig.cognitoUrl}/oauth2/authorize`);
  googleSSO.searchParams.append("identity_provider", "Google");
  googleSSO.searchParams.append("redirect_url", "https://www.cladea.io/sso");
  googleSSO.searchParams.append("response_type", "code");
  googleSSO.searchParams.append("client_id", appConfig.userpoolClientId);
  return (
    <AnchorContainer href={googleSSO.toString()}>
      <div className="goo-content">
        <div className="goo-logo">
          <img src={google} alt="google login" />
        </div>
        <div className="goo-text">Continue with Google</div>
      </div>
    </AnchorContainer>
  );
};

GoogleSSOButton.displayName = "GoogleSSOButton";

GoogleSSOButton.defaultProps = {};

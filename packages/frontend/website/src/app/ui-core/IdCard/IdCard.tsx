import { ReactElement, useState } from "react";
import { Toast } from "react-bootstrap";
import CopyToClipboard from "react-copy-to-clipboard";
import { useTheme } from "styled-components";
import * as images from "../images";
import { Space } from "../Space";
import { ThemeAndUserAgent } from "../theme";
import { Container, ToastContainer } from "./styledComponents";

const info = {
  name: {
    first: "claudio",
    last: "de angelis",
  },
  position: {
    title: "Full Stack Engineer",
  },
  contacts: [
    {
      label: "github",
      href: "https://github.com/recreateideas",
      logo: "github",
    },
    {
      label: "linkedin",
      href: "https://www.linkedin.com/in/recreateideas",
      logo: "linkedIn",
    },
    {
      label: "email",
      href: "mailto:cladea.au@gmail.com",
      copyWhenDesktop: "cladea.au@gmail.com",
      logo: "gmail",
    },
  ],
};

type Images = Record<string, string>;

interface CopiedValue {
  label: string;
  value: string;
}
interface IProps {
  breakpoint: string;
}
export const IdCard = (props: IProps): ReactElement => {
  const { breakpoint } = props;
  const [copiedValue, setCopiedValue] = useState<CopiedValue>();
  const theme = useTheme() as ThemeAndUserAgent;
  const { isMobile } = theme.userAgent || {};
  return (
    <Container breakpoint={breakpoint}>
      <div className="bio">
        <div className="avatar">
          <Space {...{ starsCount: 45, withPlanets: false }} />
          <div className="image-container"></div>
        </div>
        <div className="name h2">
          <span className="first">{info.name.first}</span>
          <span className="last">{info.name.last}</span>
        </div>
        <div className="position">
          <div className="title">{info.position.title}</div>
        </div>
      </div>
      <div className="contacts">
        {info.contacts.map((contact, i) => {
          const { href, logo, label, copyWhenDesktop } = contact;
          const element = (text: string) => (
            <>
              <img src={(images as Images)[contact.logo]} alt={logo} />
              <div className="href-text">{text}</div>
            </>
          );
          return (
            <div key={i} className="contact-container">
              {copyWhenDesktop && !isMobile ? (
                <CopyToClipboard text={href as string}>
                  <div
                    className="href-container"
                    onClick={setCopiedValue.bind(null, {
                      label,
                      value: copyWhenDesktop,
                    })}
                  >
                    {element(copyWhenDesktop)}
                  </div>
                </CopyToClipboard>
              ) : (
                <a
                  className="href-container"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {element(label)}
                </a>
              )}
            </div>
          );
        })}
      </div>
      <ToastContainer>
        <Toast
          show={!!copiedValue}
          onClose={setCopiedValue.bind(null, undefined)}
        >
          <Toast.Header>
            <div className="header-title">
              {copiedValue?.label} copied to clipboard!
            </div>
          </Toast.Header>
          <Toast.Body>
            <div className="body-content">
              <div className="copied-label">
                <b>{copiedValue?.label}:</b>
              </div>
              <div className="copied-value">{copiedValue?.value}</div>
            </div>
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
};

IdCard.displayName = "IdCard";

import { ReactElement } from "react";
import * as images from "../images";
import { Space } from "../Space";
import { Container } from "./styledComponents";

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
      href: "https://www.linkedin.com/in/recreateideas",
      logo: "github",
    },
    {
      label: "linkedin",
      href: "https://github.com/recreateideas",
      logo: "linkedIn",
    },
    {
      label: "gmail",
      href: "mailto:cladea.au@gmail.com",
      logo: "gmail",
    },
  ],
};

type Images = Record<string, string>;

interface IProps {
  breakpoint: string;
}
export const IdCard = (props: IProps): ReactElement => {
  const { breakpoint } = props;
  return (
    <Container breakpoint={breakpoint}>
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
      <div className="contacts">
        {info.contacts.map((contact, i) => {
          return (
            <div key={i} className="contact-container">
              <a className="href-container" href={contact.href}>
                <img
                  src={(images as Images)[contact.logo]}
                  alt={contact.logo}
                />
                <div className="href-text">{contact.label}</div>
              </a>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

IdCard.displayName = "IdCard";

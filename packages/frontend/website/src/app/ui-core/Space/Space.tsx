import { ReactElement } from "react";
import { moon, planet } from "../images";
import { Container, Star, Moon, Planet } from "./styledComponents";

interface IProps {}
export const Space = (props: IProps): ReactElement => {
  return (
    <Container>
      {new Array(150).fill("").map((_, i) => {
        return <Star key={i} />;
      })}
      <Moon>
        <img src={moon} alt="planet" />
      </Moon>
      <Planet>
        <img src={planet} alt="planet" />
      </Planet>
    </Container>
  );
};

Space.displayName = "Space";

Space.defaultProps = {};

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
      <Moon size={100}>
        <img src={moon} alt="planet" />
      </Moon>
      <Planet size={50}>
        <img src={planet} alt="planet" />
      </Planet>
    </Container>
  );
};

Space.displayName = "Space";

Space.defaultProps = {};

import { ReactElement } from "react";
import { moon, planet, ufo } from "../images";
import { Container, Star, Moon, Planet, Ufo } from "./styledComponents";

interface IProps {}
export const Space = (props: IProps): ReactElement => {
  return (
    <Container className="space">
      {new Array(200).fill("").map((_, i) => {
        return <Star className="star" key={i} />;
      })}
      <Ufo>
        <img src={ufo} alt="flying-saucer" />
      </Ufo>
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

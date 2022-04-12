import { ReactElement } from "react";
import { moon, planet, ufo } from "../images";
import { useStars } from "./use-stars";
import { Container, Star, Moon, Planet, Ufo } from "./styledComponents";

interface IProps {}
export const Space = (props: IProps): ReactElement => {
  const stars = useStars(155);
  return (
    <Container className="space">
      {stars.map((s, i) => {
        return <Star className="star" key={i} styledCss={s} />;
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

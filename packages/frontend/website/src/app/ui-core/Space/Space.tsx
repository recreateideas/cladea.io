import { ReactElement } from "react";
import { moon, planet, ufo } from "../images";
import { useStars } from "./use-stars";
import { Container, Star, Moon, Planet, Ufo } from "./styledComponents";

interface IProps {
  withPlanets?: boolean;
  withUfo?: boolean;
  starsCount?: number;
}
export const Space = (props: IProps): ReactElement => {
  const { starsCount = 155, withPlanets = true, withUfo = true } = props;
  const stars = useStars(starsCount);
  return (
    <Container className="space">
      {stars.map((s, i) => {
        return <Star className="star" key={i} styledCss={s} />;
      })}
      {withUfo && (
        <Ufo>
          <img src={ufo} alt="flying-saucer" />
        </Ufo>
      )}
      {withPlanets && (
        <Moon>
          <img src={moon} alt="planet" />
        </Moon>
      )}
      {withPlanets && (
        <Planet>
          <img src={planet} alt="planet" />
        </Planet>
      )}
    </Container>
  );
};

Space.displayName = "Space";

Space.defaultProps = {};

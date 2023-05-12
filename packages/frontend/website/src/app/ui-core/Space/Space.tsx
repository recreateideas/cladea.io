import { ReactElement } from "react";
import { ufo } from "../images";
import { useStars } from "./use-stars";
import { Container, Star, Ufo } from "./styledComponents";
interface IProps {
  withPlanets?: boolean;
  withUfo?: boolean;
  starsCount?: number;
}
export const Space = (props: IProps): ReactElement => {
  const { starsCount = 155, withUfo = true } = props;
  const stars = useStars(starsCount);
  return (
    <Container className="space">
      {stars.map((s, i) => {
        return <Star className="star" key={i} styledCss={s} />;
      })}
      {withUfo && (
        <Ufo className="ufo">
          <img src={ufo} alt="flying-saucer" />
          <div className="mask"></div>
        </Ufo>
      )}
    </Container>
  );
};

Space.displayName = "Space";

Space.defaultProps = {};

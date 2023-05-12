import { ReactElement, useMemo } from "react";
import { Container } from "./styledComponents";
import { moon, planet } from "../images";
import { Moon, Planet } from "../Space/styledComponents";
import { useAudio } from "src/common/hooks/use-audio";
import scream1 from "src/assets/sounds/scream1.mp3";

export const Planets = (): ReactElement => {
  const [toggle] = useAudio({ sound: scream1 });
  return useMemo(
    () => (
      <Container>
        <Planet className="planet" onClick={() => toggle()}>
          <img src={planet} alt="planet" />
        </Planet>
        <Moon className="moon">
          <img src={moon} alt="moon" />
        </Moon>
      </Container>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
};

Planets.displayName = "Planets";

Planets.defaultProps = {};

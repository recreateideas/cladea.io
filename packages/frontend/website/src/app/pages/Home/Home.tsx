import { Globe } from "src/app/features";
import { Space } from "src/app/ui-core";
import { Container } from "./styledComponents";

export const Home = () => {
  return (
    <Container id="home-page">
      <Space />
      <div className="globe-container">
        <Globe />
      </div>
    </Container>
  );
};

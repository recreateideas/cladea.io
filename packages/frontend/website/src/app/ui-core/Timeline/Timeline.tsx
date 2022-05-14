import { ReactElement } from "react";
import { Container } from "./styledComponents";

interface IProps {}
export const Timeline = (props: IProps): ReactElement => {
  return (
    <Container className="timeline">
      <div>Timeline!</div>
    </Container>
  );
};

Timeline.displayName = "Timeline";

Timeline.defaultProps = {};

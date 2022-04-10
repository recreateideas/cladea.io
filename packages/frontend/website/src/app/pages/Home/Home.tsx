import { useEffect } from "react";
import { Sidebar } from "src/app/features";
import { useDispatch, useSelector, actions, selectors } from "src/redux";
import { Container } from "./styledComponents";

export const Editor = () => {
  const dispatch = useDispatch();
  const {
    editor: { loadElements },
  } = actions;
  const { editor: editorSelectors } = selectors;
  const elements = useSelector(editorSelectors.currentElements);
  useEffect(() => {
    if (!elements) {
      dispatch(loadElements());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container id="home-page">
      <Sidebar />
    </Container>
  );
};

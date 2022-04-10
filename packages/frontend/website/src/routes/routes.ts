import { Editor } from "../app/pages";

export const routes = {
  home: {
    title: "Editor",
    path: "/home",
    exact: true,
    components: {
      mainView: Editor,
    },
    context: "editor",
  },
};

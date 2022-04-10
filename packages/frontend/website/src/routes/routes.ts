import { Home } from "../app/pages";

export const routes = {
  home: {
    title: "Editor",
    path: "/",
    exact: true,
    components: {
      mainView: Home,
    },
    context: "root",
  },
};

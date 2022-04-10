import { Home } from "../app/pages";

export const routes = {
  home: {
    title: "Editor",
    path: "/home",
    exact: true,
    components: {
      mainView: Home,
    },
    context: "root",
  },
};

import { Home } from "../app/pages";

export const routes = {
  home: {
    title: "Home",
    path: "/",
    exact: true,
    components: {
      mainView: Home,
    },
    context: "root",
  },
};

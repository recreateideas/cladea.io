import { Timeline, Contact, Home, Tech } from "../app/pages";

export const routes = [
  {
    title: "Home",
    path: "/",
    exact: true,
    components: {
      mainView: Home,
    },
    context: "root",
  },
  // {
  //   title: "Profile",
  //   path: "/profile",
  //   exact: true,
  //   components: {
  //     mainView: Profile,
  //   },
  //   context: "profile",
  // },
  {
    title: "Tech",
    path: "/tech",
    exact: true,
    components: {
      mainView: Tech,
    },
    context: "profile",
  },
  {
    title: "Timeline",
    path: "/timeline",
    exact: true,
    components: {
      mainView: Timeline,
    },
    context: "timeline",
  },
  {
    title: "Contact",
    path: "/contact",
    exact: true,
    components: {
      mainView: Contact,
    },
    context: "contact",
  },
];

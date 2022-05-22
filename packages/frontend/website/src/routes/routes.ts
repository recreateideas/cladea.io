import { Timeline, Contact, Home, Tech, SSO } from "../app/pages";

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
    title: "Welcome Back",
    path: "/sso",
    exact: true,
    hidden: true,
    components: {
      mainView: SSO,
    },
    context: "sso",
  },
  {
    title: "Make Contact",
    path: "/contact",
    exact: true,
    components: {
      mainView: Contact,
    },
    context: "contact",
  },
];

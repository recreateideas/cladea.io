import { Career, Contact, Home, Profile } from "../app/pages";

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
  {
    title: "Profile",
    path: "/profile",
    exact: true,
    components: {
      mainView: Profile,
    },
    context: "profile",
  },
  {
    title: "Career",
    path: "/career",
    exact: true,
    components: {
      mainView: Career,
    },
    context: "career",
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

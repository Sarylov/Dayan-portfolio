import AboutPage from "@/pages/AboutPage.vue";
import HomePage from "@/pages/HomePage.vue";

export const mainRoutes = [
  {
    path: "/",
    children: [
      { path: "", component: HomePage },
      { path: "home", component: HomePage },
      {
        path: "about",
        component: AboutPage,
      },
    ],
  },
];

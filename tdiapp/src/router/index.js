import Vue from "vue";
import VueRouter from "vue-router";

/* language */
import i18n from "@/i18n";
/* all pages import here */
import Home from "@/pages/Home/Home.vue";
import Allcourses from "@/pages/AllCourses/AllCourses.vue";
import About from "@/pages/About/About.vue";
import MyCourses from "@/pages/MyCourses/MyCourses.vue";
import Profil from "@/pages/Profil/Profil.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: `/${i18n.locale}`,
  },
  {
    path: "/:lang",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    children: [
      {
        path: "/",

        component: Home,
      },

      {
        path: "all",
        component: Allcourses,
      },
      {
        path: "about",
        component: About,
      },
      {
        path: "mycourses",
        component: MyCourses,
      },
      {
        path: "profil",
        component: Profil,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",

  routes,
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Home/Home.vue";
import Person from "@/views/Person.vue";
import i18n from "@/i18n";
import Allcourses from "@/pages/AllCourses/AllCourses.vue";

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
        path: "person",

        component: Person,
      },
      {
        path: "all",
        component: Allcourses,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",

  routes,
});

export default router;

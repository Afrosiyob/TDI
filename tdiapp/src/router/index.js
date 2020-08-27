import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Person from "../views/Person.vue";
import i18n from "../i18n";

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
        path: "home",

        component: Home,
      },
      {
        path: "person",

        component: Person,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",

  routes,
});

export default router;

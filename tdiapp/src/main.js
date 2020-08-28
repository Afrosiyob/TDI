import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  let language = to.params.lang;
  if (!language) {
    language = "uz";
  }

  i18n.locale = language;
  next();
});

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");

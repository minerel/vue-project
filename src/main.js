import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes.js";
import VueResource from "vue-resource";
import i18n from "./i18n";
import store from "./store";

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes,
  mode: "history"
});

//use beforeEach route guard to set the language 
router.beforeEach((to, from, next) => {
  //use the language from the routing param or default language
  let language = to.params.lang;
  if (!language) {
    language = "en";
  }
  //set the current language for i18n
  i18n.locale = language;
  next()
});
new Vue({
  el: "#app",
  router,
  store,
  i18n,
  render: h => h(App)
});

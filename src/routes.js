import Home from "./components/home.vue";
import About from "./components/about.vue";
import Contact from "./components/contact.vue";
import i18n from "./i18n";
export const routes = [
  { path: "/", redirect: `/${i18n.locale}` },
  {
    path: "/:lang",
    component: {
      render(c) {
        return c('router-view' );
      }
    },
    children: [
      { path: "/", component: Home },
      { path: "about", component: About },
      { path: "contact", component: Contact }
    ]
  }
];

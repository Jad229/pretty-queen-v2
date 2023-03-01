import AboutPage from "@/components/AboutPage.vue";
import ContactPage from "@/components/ContactPage.vue";
import Home from "@/components/Home.vue";
import ProductsPage from "@/components/ProductsPage.vue";
import ServicePage from "@/components/ServicePage.vue";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/services",
      name: "Services",
      component: ServicePage,
    },
    {
      path: "/products",
      name: "Products",
      component: ProductsPage,
    },
    {
      path: "/about",
      name: "About",
      component: AboutPage,
    },
    {
      path: "/contact",
      name: "Contact",
      component: ContactPage,
    },
  ],
});

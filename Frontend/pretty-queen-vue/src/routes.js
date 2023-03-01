import AboutPage from "@/components/AboutPage.vue";
import ContactPage from "@/components/ContactPage.vue";
import Home from "@/components/Home.vue";
import ProductsPage from "@/components/ProductsPage.vue";
import ServicePage from "@/components/ServicePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

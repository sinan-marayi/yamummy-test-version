import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import pdpListing from "../pages/pdpListing.vue";
import Dashboard from "../pages/Dashboard.vue";
import message from "../pages/Dashboard/message.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/dashboard", component: Dashboard },
    { path: "/pdp", component: pdpListing },
    { path: "/messages", component: message },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

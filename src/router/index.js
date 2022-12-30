import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import pdpListing from "../pages/pdpListing.vue";
import Dashboard from "../pages/Dashboard.vue";
import Messages from "../pages/Dashboard/message.vue";
import Tenants from "../pages/Dashboard/tenants.vue";
import Profile from "../pages/Dashboard/profile.vue";
import Settings from "../pages/Dashboard/settings.vue";

const routes = [
  { path: "/", component: Home },
  {
    path: "/dashboard",
    component: Dashboard,
    children: [
        { path: "", component: Tenants },
        { path: "messages", component: Messages },
        { path: "profile", component: Profile },
        { path: "settings", component: Settings }
    ],
  },
  { path: "/pdp", component: pdpListing },
  { path: "/messages", component: Messages },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

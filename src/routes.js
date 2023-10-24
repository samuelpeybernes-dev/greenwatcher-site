import Home from "./components/Home.vue";
import * as VueRouter from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

export default router;

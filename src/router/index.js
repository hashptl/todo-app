import Vue from "vue";
import VueRouter from "vue-router";
import ToDo from "../views/ToDo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Todo",
    component: ToDo,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
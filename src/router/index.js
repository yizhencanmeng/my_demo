import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import hyh from "../views/hyh.vue";
import zs from "../views/Zs.vue";
import lxg from "../views/Lxg.vue";
import xgt from "../views/xgt.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Hyh",
    name: "Hyh",
    component: hyh,
  },
  {
    path: "/xgt",
    name: "xgt",
    component: xgt,
  },
  {
    path: "/Zs",
    name: "Zs",
    component: zs,
  },
  {
    path: "/lxg",
    name: "lxg",
    component: lxg,
  },
  {
    path: "/zx",
    name: "zx",
    component: () => import("../views/zx.vue"),
  },
  {
    path: "/zx",
    redirect: "/zx",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

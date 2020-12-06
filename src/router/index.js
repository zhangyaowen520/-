import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import map from "../views/高德地图/map.vue";
import vueAmap from "../views/高德地图/vue-amap.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/map",
    name: "map",
    component: map,
  },
  {
    path: "/vueAmap",
    name: "vueAmap",
    component: vueAmap,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

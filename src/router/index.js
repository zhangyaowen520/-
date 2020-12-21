import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import map from "../views/高德地图/wenmap.vue";
import wenmap from "../views/高德地图/myWenMap.vue";
import vueAmap from "../views/高德地图/vue-amap.vue";
import Lists from "../views/建易宝封装/Lists.vue";
import echarts from "../views/echarts/echarts.vue"
import stairs from "../views/楼梯/stairs.vue"
import stairss from "../views/楼梯/stairss.vue"
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    // stairs楼梯
    {
        path: "/stairs",
        name: "stairs",
        component: stairs,
    },
    {
        path: "/stairss",
        name: "stairss",
        component: stairss,
    },
    //echarts
    {
        path: "/echarts",
        name: "echarts",
        component: echarts,
    },
    {
        path: "/map",
        name: "map",
        component: map,
    },
    //建易宝的封装
    {
        path: "/Lists",
        name: "Lists",
        component: Lists,
    },
    //地图的封装
    {
        path: "/wenmap",
        name: "wenmap",
        component: wenmap,
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

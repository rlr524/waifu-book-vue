import Vue from "vue";
import VueRouter from "vue-router";
import WaifuSection from "@/views/WaifuSection";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: [WaifuSection],
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;

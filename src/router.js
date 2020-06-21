import Vue from "vue";
import VueRouter from "vue-router";
import MyWaifus from "@/views/MyWaifus";
import WaifuDay from "@/views/WaifuDay";
import WaifuTop from "@/views/WaifuTop";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: [MyWaifus, WaifuDay, WaifuTop],
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;

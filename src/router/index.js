import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import JestTest from "../components/JestTest.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
		props: true,
	},
	// TODO: Change this to the real login component
	{
		path: "/login",
		name: "login",
		component: JestTest,
	},
];

const router = new VueRouter({
	mode: "history",
	routes,
});

export default router;

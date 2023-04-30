import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/HomePage.vue";
import About from "./pages/AboutPage.vue";

Vue.use(Router);

/* pathに対応する、コンポーネントを定義します */
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

const router = new Router({
  mode: "history",
  routes /* routes変数の読み込み（routes: routesの短縮記述） */,
});
export default router;

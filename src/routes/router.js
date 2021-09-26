import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/body/HomePage.vue";
import StorePage from "../components/body/shop/StorePage";
import ShopCart from "../components/header/ShopCart";
import UserFav from "../components/header/UserFav";
import AccountManagement from "../components/header/myaccount/AccountManagement";
// import ShopCart from "../components/header/ShopCart";

const routes = [
  { path: "", component: HomePage },
  { path: "/store", component: StorePage },
  { path: "/my-cart", component: ShopCart },
  { path: "/my-favorites", component: UserFav },
  { path: "/my-account", component: AccountManagement }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

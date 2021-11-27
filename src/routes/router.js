import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/body/homePage/HomePage.vue";
import StorePage from "../components/body/shop/StorePage";
import ShopCart from "../components/header/ShopCart";
import UserFav from "../components/header/UserFav";
import AccountManagement from "../components/header/myaccount/AccountManagement";
import ItemPreview from "../components/body/shop/ItemPreview.vue";
import SubscriptionPage from "../components/header/myaccount/AccountDetails/SubscriptionPage";
import MerchantPolicy from "../components/header/myaccount/AccountDetails/MerchantPolicy";
import BankStatement from "../components/header/myaccount/AccountDetails/BankStatement";
import UserAuthentication from "../components/header/myaccount/users/UserAuthentication";
import UserProfile from "../components/header/myaccount/users/UserProfile";
import SellerRecipt from "../components/header/myaccount/users/SellerRecipts";
import BuyerRecipt from "../components/header/myaccount/users/BuyerRecipt";
import ClothingPage from "../components/body/clothing/ClothingPage.vue";
import WomansClothing from "../components/body/clothing/WomanClothing";

const routes = [
  { path: "", component: HomePage },
  { path: "/store", component: StorePage },
  {
    path: "/clothing",
    component: ClothingPage,
    children: [{ path: "/woman", component: WomansClothing }]
  },
  { path: "/store/:id", component: ItemPreview },
  { path: "/my-cart", component: ShopCart },
  { path: "/my-favorites", component: UserFav },
  {
    path: "/my-account",
    component: AccountManagement,
    children: [
      {
        path: "/my-account/subscription",
        component: SubscriptionPage,
        props: true
      },
      { path: "/my-account/policy", component: MerchantPolicy },
      { path: "/my-account/Statemnt", component: BankStatement },
      { path: "/my-account/authentication", component: UserAuthentication },

      { path: "/my-account/profile", component: UserProfile },

      { path: "/my-account/SellerRecipt", component: SellerRecipt },
      { path: "/my-account/BuyerRecipt", component: BuyerRecipt }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

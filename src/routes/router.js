import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/body/homePage/HomePage.vue";
import StorePage from "../components/body/shop/StorePage";
import ShopCart from "../components/header/myaccount/checkout/ShopCart";
import UserFav from "../components/header/myaccount/checkout/UserFav";
import AccountManagement from "../components/header/myaccount/admin/AccountManagement";
import ItemPreview from "../components/body/shop/ItemPreview.vue";
import SubscriptionPage from "../components/header/myaccount/AccountDetails/SubscriptionPage";
import MerchantPolicy from "../components/header/myaccount/AccountDetails/MerchantPolicy";
import BankStatement from "../components/header/myaccount/AccountDetails/BankStatement";
import UserAuthentication from "../components/header/myaccount/users/UserAuthentication";
import UserProfile from "../components/header/myaccount/users/UserProfile";
import SellerRecipt from "../components/header/myaccount/users/SellerRecipts";
import BuyerRecipt from "../components/header/myaccount/users/BuyerRecipt";
// import ClothingPage from "../components/body/clothing/ClothingPage.vue";
// import WomanClothing from "../components/body/clothing/WomanClothing";
// import MenClothing from "../components/body/clothing/MenClothing";
import CreateProduct from "../components/header/myaccount/AccountDetails/CreateProduct";
import ManageProducts from "../components/header/myaccount/AccountDetails/ManageProduct";
import SearchResult from "../components/body/search/SearchResults.vue";
import MyResult from "../components/body/search/MyResult.vue";
import AddProduct from "../components/body/StoreProdManagement/AddProduct.vue";
import NotFound from "../components/pages/NotFound.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/marketplace", component: StorePage },
    { path: "/marketplace/:id", component: ItemPreview },
    { path: "/add-a-product", component: AddProduct },
    // {
    //   path: "/clothing",
    //   component: ClothingPage,
    //   children: [
    //     { path: "/clothing/woman", component: WomanClothing, props: true },
    //     { path: "men", component: MenClothing }
    //   ]
    // },
    { path: "/", component: HomePage },
    { path: "/my-cart", component: ShopCart },
    {
      path: "/search-Result",
      component: SearchResult,
      children: [{ path: ":id", component: MyResult }]
    },
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
        { path: "/my-account/create_product", component: CreateProduct },
        { path: "/my-account/manage_products", component: ManageProducts },
        { path: "/my-account/profile", component: UserProfile },

        { path: "/my-account/SellerRecipt", component: SellerRecipt },
        { path: "/my-account/BuyerRecipt", component: BuyerRecipt }
      ]
    },
    { path: "/:catchAll(.*)", component: NotFound }
  ]
});

export default router;

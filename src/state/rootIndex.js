import { createStore } from "vuex";
import ShopItemsModule from "./modules/shopitems/ShopItemsindexModule.js";
import UserStateModule from "./modules/UserState/UserStateIndexModule";
const store = createStore({
  modules: {
    items: ShopItemsModule,
    UserState: UserStateModule
  },
  state() {
    return {};
  },
  actions: {},
  mutations: {},
  getters: {}
});

export default store;

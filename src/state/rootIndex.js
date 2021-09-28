import { createStore } from "vuex";
import shopItemsModule from "./modules/shopitems/index.js";

const store = createStore({
  modules: {
    items: shopItemsModule
  },
  state() {
    return {};
  },
  actions: {},
  mutations: {},
  getters: {}
});

export default store;

import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
// import data from "./data";

export default {
  namespaced: true,

  state() {
    return {
      cartItemsNumber: 0,
      cartPriceTotal: 0,
      selectedItem: "Jello",
      shopItems: [{}]
    };
  },

  mutations,
  actions,
  getters
};

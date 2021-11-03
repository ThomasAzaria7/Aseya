import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

export default {
  namespaced: true,
  state() {
    return {
      favTotal: 0,
      cartTotal: 0,
      cartItems: [],
      favItems: [],
      authenticated: null,
      auth: null
    };
  },
  mutations,
  getters,
  actions
};

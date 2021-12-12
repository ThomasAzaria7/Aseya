export default {
  getSelectedProduct(context, payload) {
    context.commit("changeData", payload);
  },

  addProductToStore(context, payload) {
    context.commit("addingItem", payload);
    console.log("action triggered");
  },
  deleteStoreProduct(context, payload) {
    context.commit("deletingItem", payload);
    console.log("action triggered");
  },
  updateStoreProduct(context, payload) {
    context.commit("updatingItem", payload);
    console.log("action triggered");
  },

  updateCurrency(context, payload) {
    context.commit("newCurrency", payload);
  }
};

export default {
  getItems(state) {
    // console.log(state.shopItems[0]);
    console.log(state);
    return state.shopItems;
  },

  getSelectedItem(state) {
    console.log(state.selectedItem);

    return state.selectedItem[0];
  },

  getCartTotal(state) {
    return state.cartPriceTotal;
  }
};

export default {
  getItems(state) {
    // console.log(state.shopItems[0]);
    // console.log(state);
    return state.shopItems;
  },

  getSelectedItem(state) {
    console.log(state.selectedItem);

    // state.selectedItem[0].exchangePrice * state.currency.value;

    return state.selectedItem[0];
  },

  getCartTotal(state) {
    return state.cartPriceTotal;
  },

  getCurrencyValue(state) {
    return state.currency;
  },

  //
  getStoreItems(state) {
    return state.storeProducts;
  }
};

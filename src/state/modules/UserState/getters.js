export default {
  getAuthState(state) {
    // console.log(state.auth);
    return state.auth;
  },

  getCartTotal(state) {
    return state.cartTotal;
  },
  cartTotalPrice(state) {
    let cartTotal = 0;
    for (let i = 0; i < state.cartItems.length; i++) {
      //   state.cartItems[i].quantity;
      state.cartItems[i].cost = (
        state.cartItems[i].exchangePrice * state.cartItems[i].quantity
      ).toFixed(2); // calculates and returns total cost of item in cart component
      cartTotal += parseFloat(state.cartItems[i].cost); // calculates and reurns total cost of all cart products in items
      // console.log("hi");
    }
    return cartTotal.toFixed(2);
  },
  getfavTotal(state) {
    return state.favTotal;
  },

  refreshCart(state) {
    // state.cartItems.cost = state.cartItems.price * state.cartItems.quantity;
    return state.cartItems;
  },
  refreshFav(state) {
    return state.favItems;
  },

  itemExists(state) {
    return state.error;
  },

  getProfileInfo() {
    // const docRef = doc(db, "users", userId);
    // const docSnap = getDoc(docRef);
    // docSnap.then().then(data => {
    //   if (data.exists()) {
    //   }
    // });
  },

  /**
   * get recipts
   */

  getSellerRecipt(state) {
    return state.sellerRecipts;
  },
  getClaimedRecipt(state) {
    return state.sellerClaimedRecipt;
  },
  getBuyerRecipt(state) {
    return state.buyerRecipts;
  },

  /*get payment tokens */

  getMyToken(state) {
    return state.payToken;
  }
};

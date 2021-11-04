export default {
  getAuthState(state) {
    console.log(state.auth);
    return state.auth;
  },

  getCartTotal(state) {
    return state.cartTotal;
  },
  cartTotalPrice(state) {
    let cartTotal = 0;
    for (let i = 0; i < state.cartItems.length; i++) {
      cartTotal += parseFloat(state.cartItems[i].price);
      // console.log("hi");
    }
    return cartTotal.toFixed(2);
  },
  getfavTotal(state) {
    return state.favTotal;
  },

  refreshCart(state) {
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
  }
};

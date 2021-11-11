// import { getAuth } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../../../database/database";

export default {
  //

  putToCart(context, payload) {
    console.log(payload);

    context.commit("putItemInCart", payload);
  },
  putToFav(context, payload) {
    context.commit("putItemInFav", payload);
  },

  getCartItems(context, payload) {
    context.commit("getCartItemsFromDB", payload);
  },
  getFavItems(context, payload) {
    context.commit("getFavItemsFromDB", payload);
  },

  deleteCartItem(context, payload) {
    context.commit("removeItemFromCart", payload);
  },
  deleteFavItem(context, payload) {
    context.commit("removeItemFromFav", payload);
  },

  // refreshFav(context, payload) {
  //   context.commit("getFavItemsFromDB", payload);
  // },

  //
  authStatus(context, payload) {
    context.commit("authenticatedStatus", payload);
    console.log("refresh");
  },
  signUpUser(context, payload) {
    context.commit("userAuthenticated", payload);
    console.log(context, payload);
  },

  newUser(context, payload) {
    // const auth = getAuth();
    context.commit("createProfile", payload);
    // setTimeout(() => {
    //   //   console.log(auth);
    //   console.log(auth.currentUser.uid);
    //   const uid = auth.currentUser.uid;
    //   const docRef = doc(db, "users", uid);
    //   const docSnap = getDoc(docRef);

    //   docSnap.then().then(data => {
    //     if (data.exists()) {
    //       console.log("Document data:", data.data());
    //     } else {
    //       // doc.data() will be undefined in this case
    //       console.log("No such document!");
    //     }
    //   });
    // }, 3000);
  },

  SendSellerRecipt(context, payload) {
    context.commit("makeSellersRecipts", payload);
  },
  SendBuyerRecipt(context, payload) {
    context.commit("makeBuyerRecipts", payload);
  },
  // get recipts for seller

  retrieveSellerRecipts(context, payload) {
    context.commit("soldItemRecipts", payload);
    console.log("hi");
  },
  retrieveBuyerRecipts(context, payload) {
    context.commit("boughtItemRecipts", payload);
    console.log("hi");
  }
};

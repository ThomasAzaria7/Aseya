import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth
  // onAuthStateChanged
} from "firebase/auth";
import { db } from "../../../database/database";

import {
  setDoc,
  doc,
  getDoc,
  updateDoc,
  onSnapshot
  // collection,
  // query,
  // where
} from "firebase/firestore";
const auth = getAuth();

// setTimeout(() => {
//   // console.log("auth status", auth.currentUser);
// }, 3000);

export default {
  userAuthenticated(state, payload) {
    // console.log(state, payload);

    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);

        // The signed-in user info.
        const user = result.user;
        const userId = user.uid;
        console.log(user);

        /////////////////////////////
        // only if new user
        const docRef = doc(db, "users", userId);
        const docSnap = getDoc(docRef);

        docSnap.then().then(data => {
          if (data.exists()) {
            /// user exists

            console.log("Document data:", data.data());
          } else {
            // run if no user profile found in database
            // doc.data() will be undefined in this case
            // create new user
            try {
              // contact firebase to add user using
              const docRef = setDoc(docRef, {
                displayName: user.displayName,
                email: user.email,
                message: payload // usepayload to get dcoument name information
              });
              console.log("Document written with ID: ", docRef);
            } catch (e) {
              console.error("Error adding document: ", e);
            }
            console.log("No such document!");
          } //end of else
        });

        //////////////////

        // ...
      })
      .catch(error => {
        /// catch registeration error
        console.log(error);

        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

    //  check if user exists
  },

  authenticatedStatus(state, user) {
    console.log("authhh", user);

    return (state.auth = user);
    //
  },

  createProfile() {
    const userId = auth.currentUser.uid;
    console.log(userId);

    let userSchema = {
      //   name: "",
      //   lastname: "",
      //   displayName: "",
      //   emails: "",
      address: "",
      phoneNumber: "",
      photoUrl: "",

      payments: {
        paypal_merchantId: "",
        payPal_email: "",
        payout_balance: 0
      },

      accountStatus: {
        accountType: ["private", "business"],
        subscriptionPlan: ["basic", "premium", "enterprise"]
      },
      sellHistory: {
        recipts: []
      },
      buyHistory: {
        recipts: []
      },
      mySellProductList: [{}],
      myFavList: [{}],
      myCart: [{}]
    };

    try {
      // contact firebase to add user using
      const docRef = updateDoc(doc(db, "users", userId), userSchema);
      console.log("Document written with ID: ", docRef);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    console.log(userSchema);
  },

  /*
  user and products storage 
  
  */

  async putItemInCart(state, userData) {
    console.log(state, userData);

    const docRef = doc(db, "users", userData.uid); // refrence to user location on database based on individual user UID;

    const docSnap = await getDoc(docRef);
    const retrievedCartItems = docSnap.data().myCart;
    console.log(retrievedCartItems);

    let myItems = retrievedCartItems;
    myItems.unshift(userData.item);

    // myItems.forEach(x => {
    //   console.log(x);
    // });

    try {
      // contact firebase to update itemscart  // myCart // object
      const result = await updateDoc(docRef, {
        myCart: myItems
      });

      console.log("Document written with ID: ", result);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    //

    state.cartTotal = myItems.length;

    //
    // if(){
    // }else{
    // }
    // const docSnap = getDoc(docRef);
  },
  async putItemInFav(state, userData) {
    console.log(state, userData);

    const docRef = doc(db, "users", userData.uid); // refrence to user location on database based on individual user UID;
    const docSnap = await getDoc(docRef); // retrieve user data from database
    const retrievedFavItems = docSnap.data().myFavList; //  get FavLIst items
    console.log(retrievedFavItems);

    let favItems = retrievedFavItems;
    favItems.unshift(userData.item);

    try {
      // contact firebase to update itemscart  // myCart // object
      const result = await updateDoc(docRef, {
        myFavList: favItems
      });

      console.log("Document written with ID: ", result);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    state.favTotal = favItems.length;
  },

  //

  async getCartItemsFromDB(state, uid) {
    console.log(state, uid);
    const docRef = doc(db, "users", uid); // refrence to user location on database based on individual user UID;
    const docSnap = await getDoc(docRef); // retrieve user data from database
    console.log(docSnap.data().myCart);
    //
    let retreieveCartItems = [];

    await onSnapshot(docRef, doc => {
      retreieveCartItems = doc.data().myCart;
      state.cartItems = retreieveCartItems;
      state.cartTotal = retreieveCartItems.length;
      console.log("mycartss", retreieveCartItems);

      // console.log("Current data: ", );
    });

    // const retrievedCartItems = docSnap.data().myFavList; //  get FavLIst items
    // console.log(retrievedCartItems, state);
  },
  async getFavItemsFromDB(state, uid) {
    const docRef = doc(db, "users", uid); // refrence to user location on database based on individual user UID;
    let retreieveFavItems = [];

    await onSnapshot(docRef, doc => {
      retreieveFavItems = doc.data().myFavList;
      state.favItems = retreieveFavItems;
      state.favTotal = retreieveFavItems.length;
      console.log("myfavas", retreieveFavItems);

      // console.log("Current data: ", );
    });
  }

  //
};
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  signOut
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
  logout(state) {
    signOut(auth);
    state.auth = null;
  },
  userAuthenticated(state, payload) {
    // console.log(state, payload);

    if (payload === "google") {
      console.log(payload);
    }
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
              const docSnap = setDoc(docRef, {
                displayName: user.displayName,
                email: user.email,
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
                // sellHistory: {
                // },
                // buyHistory: {
                // },
                mySellProductList: [],
                myFavList: [],
                myCart: [],
                provider: payload // usepayload to get dcoument name information
              });

              console.log("Document written with ID: ", docSnap);
            } catch (e) {
              console.error("Error adding document: ", e);
            }
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
      // sellHistory: [],
      // buyHistory: [],
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
    // console.log(state, userData);

    const docRef = doc(db, "users", userData.uid); // refrence to user location on database based on individual user UID;

    const docSnap = await getDoc(docRef);
    const retrievedCartItems = docSnap.data().myCart;
    // console.log(retrievedCartItems);

    let myItems = retrievedCartItems;
    myItems.unshift(userData.item);

    let check = retrievedCartItems.filter(x => x.code === userData.item.code);

    console.log("cart itessssss", check);

    if (check.length === 1) {
      try {
        console.log("hi");
        // contact firebase to update itemscart  // myCart // object
        const result = await updateDoc(docRef, {
          myCart: myItems
        });

        console.log("Document written with ID: ", result);
        // state.cartTotal = myItems.length;
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      console.log("else");
      state.error = "product already in cart";
    }

    //
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
    //

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
  },

  //deleting items from user cart and favourite
  async removeItemFromCart(state, userData) {
    console.log(state, userData.uid);
    const docRef = doc(db, "users", userData.uid);
    const docSnap = await getDoc(docRef); // retrieve user data from database
    let retrievedCartItems = docSnap.data().myCart;

    const updateItems = retrievedCartItems.filter(
      x => x.code !== userData.itemId
    );

    await updateDoc(docRef, {
      myCart: updateItems
    });
    console.log(updateItems); //
  },
  async removeItemFromFav(state, userData) {
    console.log(state, userData.uid);
    const docRef = doc(db, "users", userData.uid);
    const docSnap = await getDoc(docRef); // retrieve user data from database
    let retrievedFavItems = docSnap.data().myFavList;

    const updateItems = retrievedFavItems.filter(
      x => x.code !== userData.itemId
    );

    await updateDoc(docRef, {
      myFavList: updateItems
    });
    console.log(updateItems); //
  },

  async makeBuyerRecipts(state, payload) {
    // console.log(payload);

    // const items = payload.reciptData.body.purchase_units[0].items;
    const items = payload.reciptData.body;
    const uid = payload.uid;
    console.log(items);

    // console.log(items, uid);

    const docRef = doc(db, "users", uid); // refrence to user location on database based on individual user UID;
    let data = [{}];
    const docSnap = await getDoc(docRef); // retrieve user data from database
    data = docSnap.data().buyHistory;

    console.log(data);
    // console.log(items);

    let itemRecipt = data;

    if (!data) {
      itemRecipt = [items];
      console.log("here");
    } else {
      itemRecipt.push(items);
      console.log("unchifthing", itemRecipt);
    }

    await updateDoc(docRef, {
      buyHistory: itemRecipt
      // message: payload // usepayload to get dcoument name information
    });

    state.buyerRecipts = itemRecipt;
  },

  /**
     // sellerRecipt
     
   **/

  async makeSellersRecipts(_, reciptData) {
    console.log(reciptData);
    const items = reciptData.body.purchase_units[0].items;
    console.log(items);

    //
    const reciptId = reciptData.body.id;
    // const date = reciptData.body.create_time;
    const status = reciptData.body.status;
    const payerDetails = reciptData.body.payer;
    const links = reciptData.body.links;

    let reciptInfo = {
      reciptId: reciptId,
      // created: date,
      status: status,
      payer: payerDetails,
      link: links,
      items: [{}],
      total: 0,
      PaypalFee: 0,
      finalvalue: 0
    };

    //

    let users = [];

    for (let i = 0; i < items.length; i++) {
      let uid = items[i].sku; // uid of sellers

      let userExists = users.includes(uid);
      let userItems;

      console.log(userExists);
      if (!userExists) {
        const docRef = doc(db, "users", uid); // refrence to user location on database based on individual user UID;
        const docSnap = await getDoc(docRef); // retrieve user data from database
        let myHistory = docSnap.data().sellHistory; // get recipt data from DB
        // console.log(myHistory);

        let reciptExist;

        // console.log(reciptExist);
        // console.log("recipt exists", reciptExist);

        users.push(uid); //adding all users

        userItems = items.filter(x => x.sku == uid); // find all items belonging to the user that have the same uid
        console.log(userItems);

        // loop through all items belonging to a single seller. and calculate the total of their sold items,
        let value = 0;
        for (let i = 0; i < userItems.length; i++) {
          value += parseFloat(userItems[i].unit_amount.value);
          userItems.total = value;
          console.log(value);
        }
        reciptInfo.items = userItems; // assign items specific to user to recipt data object body

        let myRecipt = [];
        // check database return array
        if (myHistory) {
          reciptExist = myHistory.some(x => x.reciptId === reciptId); // check if recipt exist in database
          myRecipt = myHistory;
        }

        // send recipt to seller via email
        let sellerEmail = docSnap.data().email; // get currentSeller email from DB, "repeat for loop for "
        let mailData = {
          recipt_data: reciptInfo,
          current_SEller_email: sellerEmail
        };
        const dataY = JSON.stringify(mailData);

        // first loop prepare seller infor and data to be emailed.
        console.log(sellerEmail);

        fetch("https://aseyea.herokuapp.com/my-server/send-recipt", {
          // this is inside of a loop,
          method: "POST",
          headers: {
            "Content-Type": "application/json"
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: dataY
        })
          .then(x => console.log(x))
          .catch(err => console.log(err));
        //

        // if recipt does NOT exists push current recipt on to the database/ otherwise skip do not save,
        if (!reciptExist) {
          console.log("heeellllllloooooooo");
          // myRecipt = [reciptInfo];
          myRecipt.push(reciptInfo);

          //
        } else {
          // skip adding current recipts
          console.log("skip");
        }

        await updateDoc(docRef, {
          sellHistory: myRecipt
        });

        //

        //
      } // first if statement
    } //for
  }, //

  /**
   * get seller recipts
   */

  async soldItemRecipts(state, uid) {
    console.log(state);
    const docRef = doc(db, "users", uid); // refrence to user location on database based on individual user UID;
    const docSnap = await getDoc(docRef); // retrieve user data from database
    const myRecipt = docSnap.data().sellHistory;
    // console.log(myRecipt);
    state.sellerRecipts = myRecipt;
  },

  async boughtItemRecipts(state, uid) {
    console.log(state);
    const docRef = doc(db, "users", uid); // refrence to user location on database based on individual user UID;
    const docSnap = await getDoc(docRef); // retrieve user data from database
    const myRecipt = docSnap.data().buyHistory;
    // console.log(myRecipt);
    state.buyerRecipts = myRecipt;
    // this.;
  },

  /*
   * payment tokens
   */

  updateToken(state) {
    return fetch("https://aseyea.herokuapp.com/my-server/token", {
      method: "POST"
    })
      .then(function(res) {
        if (!res.ok) {
          alert("Something went wrong");
        }

        return res.json();
      })
      .then(data => {
        // console.log(data);

        // setting cookie
        let name = "myToken";
        const value = JSON.stringify({ token: data.tokenBody.access_token });
        var date = new Date();
        date.setTime(date.getTime() + data.tokenBody.expires_in * 1000);
        var expires = "; expires=" + date.toGMTString();
        document.cookie = name + "=" + value + expires + "; path=/";
        //

        state.payToken = JSON.stringify({ token: data.tokenBody.access_token });
      });
  },
  getToken(state, cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        state.payToken = c.substring(name.length, c.length);
        return c.substring(name.length, c.length);
      }
    }
    state.payToken = null;
    return "";
  }
};

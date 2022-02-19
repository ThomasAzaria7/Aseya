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
      // console.log(payload);
    }
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // console.log(token);

        // The signed-in user info.
        const user = result.user;
        const userId = user.uid;
        // console.log(user);

        /////////////////////////////
        // only if new user
        const docRef = doc(db, "users", userId);
        const docSnap = getDoc(docRef);

        docSnap.then().then(data => {
          if (data.exists()) {
            /// user exists
            // console.log("Document data:", data.data());
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

              //
              // send  welcome email
              fetch("https://aseyea.herokuapp.com/my-server/register-welcome", {
                headers: {
                  "content-type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({ email: user.email })
              }).then(y => console.log(y));
              //

              console.log("Document written with IDX: ", docSnap);
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
    // console.log("authhh", user);

    return (state.auth = user);
    //
  },

  createProfile() {
    const userId = auth.currentUser.uid;
    // console.log(userId);

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
      myFavList: [],
      myCart: []
    };

    try {
      // contact firebase to add user using
      const docRef = updateDoc(doc(db, "users", userId), userSchema);

      console.log("Document written with ID: ", docRef);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    // console.log(userSchema);
  },

  /*
  user and products storage

  */

  async putItemInCart(state, userData) {
    // console.log(state, userData);

    let auth = userData.auth;
    let item = userData.item;
    let uid = userData.uid;

    // let check = retrievedCartItems.filter((x) => x === userData);
    console.log("user stats", userData.auth);

    // if user is authenticated
    if (auth == "registered") {
      const docRef = doc(db, "users", uid); // refrence to user location on database based on individual user UID;
      const docSnap = await getDoc(docRef);
      const retrievedCartItems = docSnap.data().myCart;
      let cartItems = retrievedCartItems;
      // check if cart in db is empty
      if (cartItems.length == 0) {
        // console.log("im here");
        cartItems = [item];

        await updateDoc(docRef, {
          myCart: cartItems
        });
      } else {
        // if cart is not empty.
        for (let x = 0; x < cartItems.length; x++) {
          // console.log("cart items", cartItems[x], "my item", item.Proxy);
          if (
            cartItems[x].code == item.code &&
            cartItems[x].quantity == item.quantity
          ) {
            // console.log("identical");
            return;
            //
          } else {
            // console.log("not identical");

            cartItems.filter((x, i) => {
              if (x.code == item.code) {
                cartItems.splice(i, 1);
              }
              // console.log(x, i);
            });
            cartItems.unshift(item);
            await updateDoc(docRef, {
              myCart: cartItems
            });
            return;
          }
        }
      }
    } else if (auth == "guest") {
      console.log("here");

      // retrieve data and create ref
      const docRefGuest = doc(db, "Guestusers", uid); // refrence to user location on database based on individual user UID;

      const docSnapGuest = await getDoc(docRefGuest);

      let retrievedGuestCartItems;
      let cartItems;
      try {
        retrievedGuestCartItems = docSnapGuest.data().myCart;
        cartItems = retrievedGuestCartItems;
        console.log("guest cart item", cartItems);
      } catch (error) {
        setDoc(docRefGuest, {
          displayName: "",
          email: null,
          address: "",
          phoneNumber: "",
          photoUrl: "",
          myFavList: [],
          myCart: [],
          provider: "guest" // usepayload to get dcoument name information
        });
        //
        console.log(error);
      }

      if (cartItems.length == 0) {
        // check if cart in db is empty
        // console.log("im here");
        cartItems = [item];

        await updateDoc(docRefGuest, {
          myCart: cartItems
        });
      } else {
        // if cart is not empty.
        for (let x = 0; x < cartItems.length; x++) {
          // console.log("cart items", cartItems[x], "my item", item.Proxy);
          if (
            cartItems[x].code == item.code &&
            cartItems[x].quantity == item.quantity
          ) {
            // console.log("identical");
            return;
            //
          } else {
            // console.log("not identical");

            cartItems.filter((x, i) => {
              if (x.code == item.code) {
                cartItems.splice(i, 1);
              }
              // console.log(x, i);
            });
            cartItems.unshift(item);
            await updateDoc(docRefGuest, {
              myCart: cartItems
            });
            return;
          }
        }

        //
      }

      // console.log("cart itessssss", check);

      // try {
      //   console.log("hi");
      //   // contact firebase to update itemscart  // myCart // object
      //   const result = await updateDoc(docRef, {
      //     myCart: cartItems
      //   });

      //   console.log("Document written with ID: ", result);
      // } catch (e) {
      //   console.error("Error adding document: ", e);
      // }
      //   console.log("else");
      //   state.error = "product already in cart";

      //
    }
  },
  async putItemInFav(state, userData) {
    // console.log(state, userData);

    const item = userData.item; //
    const docRef = doc(db, "users", userData.uid); // refrence to user location on database based on individual user UID;
    const docSnap = await getDoc(docRef); // retrieve user data from database
    const retrievedFavItems = docSnap.data().myFavList; //  get FavLIst items
    // console.log(retrievedFavItems);
    let favItems = retrievedFavItems;
    //
    if (favItems.length == 0) {
      // check if cart in db is empty
      // console.log("im here");
      favItems = [item];

      await updateDoc(docRef, {
        myFavList: favItems
      });
    } else {
      // if cart is not empty.
      for (let x = 0; x < favItems.length; x++) {
        // console.log("cart items", favItems[x], "my item", item.Proxy);
        if (
          favItems[x].code == item.code &&
          favItems[x].quantity == item.quantity
        ) {
          // console.log("identical");
          return;
          //
        } else {
          // console.log("not identical");

          favItems.filter((x, i) => {
            if (x.code == item.code) {
              favItems.splice(i, 1);
            }
            // console.log(x, i);
          });
          favItems.unshift(item);
          await updateDoc(docRef, {
            myFavList: favItems
          });
          return;
        }
      }
    }

    //
    favItems.unshift(userData.item);

    try {
      const result = await updateDoc(docRef, {
        myFavList: favItems
      });

      console.log("Document written with ID: ", result);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    state.favTotal = favItems.length;
  },

  //  clear error of items already exist in cart

  clearCartError(state) {
    state.error = null;
  },

  //

  async getCartItemsFromDB(state, uid) {
    let docRef;
    // console.log(state, uid);
    if (uid[0] == "guest") {
      console.log("guest");
      docRef = doc(db, "Guestusers", uid[1]); // refrence to user location on database based on individual user UID;
    } else {
      console.log("user");
      docRef = doc(db, "users", uid); // refrence to user location on database based on individual user UID;
    }
    // const docSnap = await getDoc(docRef); // retrieve user data from database

    //
    let retreieveCartItems = [];
    //

    try {
      await onSnapshot(docRef, doc => {
        retreieveCartItems = doc.data().myCart;
        state.cartItems = retreieveCartItems;
        state.cartTotal = retreieveCartItems.length;
        // console.log("mycartss", retreieveCartItems);

        // console.log("Current data: ", );
      });
    } catch (error) {
      retreieveCartItems = [];
    }

    // const retrievedCartItems = docSnap.data().myFavList; //  get FavLIst items
    // console.log(retrievedCartItems, state);
  },

  async getFavItemsFromDB(state, uid) {
    let docRef;
    // console.log(state, uid);
    if (uid[0] == "guest") {
      console.log("guest");
      docRef = doc(db, "Guestusers", uid[1]); // refrence to user location on database based on individual user UID;
    } else {
      console.log("user");
      docRef = doc(db, "users", uid); // refrence to user location on database based on individual user UID;
    }
    let retreieveFavItems = [];

    try {
      await onSnapshot(docRef, doc => {
        retreieveFavItems = doc.data().myFavList;
        state.favItems = retreieveFavItems;
        state.favTotal = retreieveFavItems.length;
        // console.log("myfavas", retreieveFavItems);
      });
    } catch (error) {
      // console.log(error);
    }
  },

  //deleting items from user cart and favourite
  async removeItemFromCart(state, userData) {
    // console.log(state, userData.uid);
    let docRef;
    // = doc(db, "users", userData.uid);

    if (userData.uid[0] == "guest") {
      console.log("guest");
      docRef = doc(db, "Guestusers", userData.uid[1]); // refrence to user location on database based on individual user UID;
    } else {
      console.log("user");
      docRef = doc(db, "users", userData.uid); // refrence to user location on database based on individual user UID;
    }

    const docSnap = await getDoc(docRef); // retrieve user data from database
    let retrievedCartItems = docSnap.data().myCart;

    const updateItems = retrievedCartItems.filter(
      x => x.code !== userData.itemId
    );

    await updateDoc(docRef, {
      myCart: updateItems
    });
    // console.log(updateItems); //
  },
  async removeItemFromFav(state, userData) {
    // console.log(state, userData.uid);
    const docRef = doc(db, "users", userData.uid);
    const docSnap = await getDoc(docRef); // retrieve user data from database
    let retrievedFavItems = docSnap.data().myFavList;

    const updateItems = retrievedFavItems.filter(
      x => x.code !== userData.itemId
    );

    await updateDoc(docRef, {
      myFavList: updateItems
    });
    // console.log(updateItems); //
  },

  async makeBuyerRecipts(state, payload) {
    const items = payload.reciptData.body;

    let docRef; // refrence to user location on database based on individual user UID;
    // = doc(db, "users", userData.uid);

    if (payload.uid[0] == "guest") {
      console.log("guest");
      docRef = doc(db, "Guestusers", payload.uid[1]); // refrence to user location on database based on individual user UID;
    } else {
      console.log("user");
      docRef = doc(db, "users", payload.uid); // refrence to user location on database based on individual user UID;
    }

    await updateDoc(docRef, {
      myCart: []
    });

    let data = [{}];
    const docSnap = await getDoc(docRef); // retrieve user data from database
    data = docSnap.data().buyHistory;

    let itemRecipt = data;
    if (!data) {
      itemRecipt = [items];
    } else {
      itemRecipt.unshift(items);
    }

    //
    let mailData = {
      recipt_data: items,
      current_SEller_email: "sellerEmail"
    };
    const dataY = JSON.stringify(mailData);
    fetch("https://aseyea.herokuapp.com/my-server/buyer-recipt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: dataY
    })
      .then(x => console.log(x))
      .catch(err => console.log(err));
    //

    await updateDoc(docRef, {
      buyHistory: itemRecipt
    });

    //

    state.buyerRecipts = itemRecipt;
  },

  /**
     // sellerRecipt

   **/

  async makeSellersRecipts(_, reciptData) {
    // console.log(reciptData);
    const items = reciptData.body.purchase_units[0].items;
    // console.log(items);

    //
    const reciptId = reciptData.body.id;
    // const date = reciptData.body.create_time;
    const status = reciptData.body.status;
    const payerDetails = reciptData.body.payer;
    const links = reciptData.body.links;
    const shipping = reciptData.body.purchase_units[0].shipping;

    let reciptInfo = {
      reciptId: reciptId,
      status: status,
      payer: payerDetails,
      link: links,
      items: [{}],
      total: 0,
      shipping: shipping,
      PaypalFee: 0,
      finalvalue: 0,
      claimed: "false"
    };

    //

    let users = [];

    for (let i = 0; i < items.length; i++) {
      let uid = items[i].sku; // uid of sellers

      let userExists = users.includes(uid);
      let userItems;

      // console.log(userExists);
      if (!userExists) {
        const docRef = doc(db, "users", uid); // refrence to user location on database based on individual user UID;
        const docSnap = await getDoc(docRef); // retrieve user data from database
        let myHistory;
        let completed;

        try {
          myHistory = docSnap.data().sellHistory.recent; // get recipt data from DB
          completed = docSnap.data().sellHistory.completed; // get recipt data from DB			sellHistory: {recent: recent, completed: myRecipt},
        } catch (error) {
          console.log(error);
        }

        // console.log(myHistory);
        if (!completed) {
          //
          completed = []; //
        }
        let reciptExist;
        users.push(uid); //adding all users
        userItems = items.filter(x => x.sku == uid); // find all items belonging to the user that have the same uid

        /* loop through all items belonging to a single seller. and calculate the total of their sold items,
         * calculate transactional fee here
         */
        let total = 0;
        let totalFee = 0;
        const feePercentage = 2.7;
        let thirtycents = 0.3 / userItems.length;
        for (let i = 0; i < userItems.length; i++) {
          //
          let itemPrice = userItems[i].unit_amount.value;
          // loop through items belonging to a single user to retireve total cost
          // consol.log("my iiiiiittttteeeemmms", userItems);

          // add extra item details to 'userItemms here , i.e userItems = xtraObject

          userItems[i].cardFee = parseFloat(
            itemPrice * (feePercentage / 100) + thirtycents
          ).toFixed(2);
          total += parseFloat(itemPrice); // retireve all cost and assign total to variable total
          totalFee += parseFloat(userItems[i].cardFee); // calculate total fee from each item in in one seller's recipt.
          reciptInfo.total = total; // set total to recipt body total variable
          reciptInfo.total.toFixed(2);
          reciptInfo.PaypalFee = totalFee.toFixed(2); // set total calculated tranaction fee to recipt body fee variable
          // console.log(userItems[i].cardFee);
          // console.log(totalFee);
        } // end of loop
        // console.log(parseFloat(0.57 + 0.84));
        reciptInfo.items = userItems; // assign items specific to user to recipt data object body
        //end after loop assignments

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
          current_SEller_email: sellerEmail,
          processingFee: reciptInfo.PaypalFee
        };
        const dataY = JSON.stringify(mailData);
        // first loop prepare seller infor and data to be emailed.
        // console.log(sellerEmail);

        await fetch("https://aseyea.herokuapp.com/my-server/send-recipt", {
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
          myRecipt.unshift(reciptInfo);
          // consol.log("item added to recippts");
        } else {
          // consol.log("skip");
        }

        await updateDoc(docRef, {
          sellHistory: { recent: myRecipt, completed: completed }
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
    // console.log(state);
    const docRef = doc(db, "users", uid); // refrence to user location on database based on individual user UID;
    let myRecipt;
    await onSnapshot(docRef, doc => {
      // myHistory = doc.data().sellHistory;
      myRecipt = doc.data().sellHistory;
      // console.log("Current data: ", );
      state.sellerRecipts = myRecipt.recent;
    });

    // const docSnap = await getDoc(docRef); // retrieve user data from database
    // console.log(myRecipt);
  },

  /*
   * claiming payout from seller
   */
  async claimedSellerRecipt(state, payload) {
    let myRecipt;
    const uid = payload.uid;
    const reciptId = payload.id;
    // consol.log(state, payload, "uid", uid);
    const docRef = doc(db, "users", uid); // refrence to user location on database based on individual user UID;
    const docSnap = await getDoc(docRef); // retrieve user data from database
    let recent = docSnap.data().sellHistory.recent; // get recipt data from DB
    let completed = docSnap.data().sellHistory.completed; // get recipt data from DB			sellHistory: {recent: recent, completed: myRecipt},

    //find item to move to completed
    let index = null;
    recent.filter((x, i) => {
      if (x.reciptId === reciptId) {
        index = i;
        // consol.log("itemFound", i);
      }
    });
    // consol.log(index);
    const item = recent.splice(index, 1)[0];
    // consol.log("item removed", item);
    // consol.log("recentItems", recent);

    //

    item.payoutReciptId = payload.payoutReciptId;
    item.claimed = true;

    // consol.log("completed", completed);

    if (!completed) {
      myRecipt = [item];
    } else {
      myRecipt = completed;
      myRecipt.unshift(item);
      // consol.log("adding");
    }

    state.sellerClaimedRecipt = myRecipt;

    // consol.log("recipt", recent);
    await updateDoc(docRef, {
      sellHistory: { recent: recent, completed: myRecipt }
    });
    // await updateDoc(docRef, {
    // 	sellHistory: {completed: myRecipt},
    // });
  },

  //

  /** */
  async getClaimedItemsfromDB(state, payload) {
    const uid = payload.uid;
    let myRecipt;
    // consol.log("uid", uid);
    const docRef = doc(db, "users", uid); // refrence to user location on database based on individual user UID;

    await onSnapshot(docRef, doc => {
      myRecipt = doc.data().sellHistory.completed;
      // consol.log(myRecipt);
      state.sellerClaimedRecipt = myRecipt;
    });
  },

  async boughtItemRecipts(state, uid) {
    // consol.log(state);
    const docRef = doc(db, "users", uid); // refrence to user location on database based on individual user UID;
    // const docSnap = await getDoc(docRef); // retrieve user data from database
    let myRecipt;
    await onSnapshot(docRef, doc => {
      // myHistory = doc.data().sellHistory;
      myRecipt = doc.data().buyHistory;
      // console.log("Current data: ", );
      state.buyerRecipts = myRecipt;
    });
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
  },
  //

  /* create communication between seller and buyer */

  async sellerBuyerCommunication(state, data) {
    // consol.log(data);

    const uid = data.product.sku;
    const reciptId = data.recipt_id;
    const productCode = data.product.name;
    // const message = data.message;
    let myMessages = {};

    // consol.log(uid, reciptId);
    const docRef = doc(db, "users", uid); // refrence to user location on database based on individual user UID;
    onSnapshot(docRef, doc => {
      // myHistory = doc.data().sellHistory;
      const recipts = doc.data().sellHistory; // get recipt arrays
      // consol.log(recipts);

      const myMesssageContainer = recipts.filter(x => x.reciptId === reciptId);

      // console.log(
      //   myMesssageContainer[0].items.filter(x => x.name === productCode)
      // );

      let itemIndex;

      myMesssageContainer[0].items.filter((x, i) => {
        if (x.name === productCode) {
          itemIndex = i;
        }
      });

      // messageContent = {
      //   name: "",
      //   date: "",
      //   messageText: ""
      // };

      //

      let products = {};

      // console.log(message);
      // console.log(itemIndex);

      let selectedItemName = myMesssageContainer[0].items[itemIndex].name;

      products[selectedItemName] = [{ message: "hi" }, { message: "helo" }];
      // console.log(products);

      myMessages[reciptId] = products;
      //

      // console.log(inqueryItem);

      // console.log("Current data: ", );
    });
    updateDoc(docRef, {
      inbox: myMessages
    });
    // console.log(myMessages);
  }
};

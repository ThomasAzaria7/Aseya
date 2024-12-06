import { db } from "../../../database/database";
import { setDoc, doc, getDoc, updateDoc, onSnapshot } from "firebase/firestore";
//

export default {
  async addProductToDB(_, payload) {
    // console.log(state, );

    console.log(payload);

    const docRef = doc(db, "Products", "store");
    const docSnap = await getDoc(docRef);

    let items = [];

    try {
      console.log(docSnap.data().items);
      if (docSnap.data().items) {
        items = docSnap.data().items;
        items.push(payload);
      } else {
        //
        items = [payload];
      }
      //
    } catch (error) {
      console.log(error);
      items = [payload];

      //
    }

    try {
      updateDoc(docRef, {
        items: items
      });
    } catch (err) {
      console.log(err);
    }
  },
  async getStoreItems(state) {
    const docRef = doc(db, "Products", "store");

    onSnapshot(docRef, doc => {
      state.storeProducts = doc.data().items;
    });
  },
  async newCurrency(state, payload) {
    console.log(state, payload);
    const docRef = doc(db, "Products", "items");
    const docSnap = await getDoc(docRef);

    console.log(docSnap.data().storeProducts);

    let storeProducts = docSnap.data().storeProducts;

    fetch("https://api.exchangerate.host/latest?base=USD", {
      headers: {
        "content-type": "application/json"
      },
      method: "GET"
    })
      .then(x => x.json())
      .then(currency => {
        console.log(currency.rates[payload]);

        const rate = currency.rates[payload];

        (state.currency.type = payload),
          (state.currency.value = currency.rates.payload);

        for (let i = 0; i < storeProducts.length; i++) {
          storeProducts[i].exchangePrice = (
            storeProducts[i].price * rate
          ).toFixed(2);
        }

        state.shopItems = storeProducts;

        setDoc(docRef, {
          storeProducts
        });
      });
  },
  async addingItem(state, storeProducts) {
    // state

    const docRef = doc(db, "Products", "items");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log(docSnap.data().storeProducts);
      return (state.shopItems = docSnap.data().storeProducts);
    } else {
      try {
        const docSnap = await setDoc(docRef, {
          storeProducts
        });
        console.log("Document written with ID: ", docSnap);
        // return (state.shopItems = storeProducts);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    //
  },
  deletingItem() {},
  updatingItem() {},

  changeData(state, payload) {
    //
    // console.log(payload.id);
    // console.log(state.shopItems);
    // console.log( state.shopItems.filter((x)=> payload.id === x.code));\
    // console.log(state.shopItems[]);

    let cart1 = state.shopItems.filter(x => payload.id === x.code);

    // console.log("item found", cart1);

    if (cart1.length == 0) {
      cart1 = state.storeProducts.filter(x => payload.id === x.code);
    }
    // another if statement if there is more cart

    return (state.selectedItem = cart1);
    // state.data
    // state.greet = payload;
    // console.log(payload);
    // console.log(state.shopItems);
    // console.log(state.coaches);
  },

  async sendDataToDb() {}
};

import { db } from "../../../database/database";
import { setDoc, doc, getDoc } from "firebase/firestore";
//

export default {
  async addingItem(state, storeProducts) {
    // state

    const docRef = doc(db, "Products", "items");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log(docSnap.data().storeProducts);
      return (state.shopItems = docSnap.data().storeProducts);
    } else {
      try {
        const docRef = await setDoc(docRef, {
          storeProducts
        });
        console.log("Document written with ID: ", docRef);
        return (state.shopItems = storeProducts);
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

    return (state.selectedItem = state.shopItems.filter(
      x => payload.id === x.code
    ));
    // state.data
    // state.greet = payload;
    // console.log(payload);
    // console.log(state.shopItems);
    // console.log(state.coaches);
  },

  async sendDataToDb() {}
};

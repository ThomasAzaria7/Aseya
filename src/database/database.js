import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByWKUIfYzkyVt4BZEY09uL0gXpPjgtl_I",
  authDomain: "aseyacommerce.firebaseapp.com",
  projectId: "aseyacommerce",
  storageBucket: "aseyacommerce.appspot.com",
  messagingSenderId: "869431660630",
  appId: "1:869431660630:web:8e9d1a85bbefc78869ebf7",
  measurementId: "G-LSFJL0M83N"
};

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);

/*
// console.log(firebaseApp);
// console.log(db);
// console.log(analytics);
*/

export { firebaseApp, db, analytics };

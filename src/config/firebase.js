import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "fb-crud-93570.firebaseapp.com",
  projectId: "fb-crud-93570",
  storageBucket: "fb-crud-93570.appspot.com",
  messagingSenderId: "1004097450473",
  appId: process.env.REACT_APP_ID
};

initializeApp(firebaseConfig);

export const db = getFirestore()

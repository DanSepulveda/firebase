import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHO_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE,
  messagingSenderId: process.env.REACT_APP_SENDER,
  appId: process.env.REACT_APP_ID
  //   apiKey: "AIzaSyD8mk81mE_42F3mHEzfMxmrBTsvzlZPqRM",
  // authDomain: "fb-crud-93570.firebaseapp.com",
  // projectId: "fb-crud-93570",
  // storageBucket: "fb-crud-93570.appspot.com",
  // messagingSenderId: "1004097450473",
  // appId: "1:1004097450473:web:0c82f656fc99881ff89b78"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

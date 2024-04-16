import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCLXnl0rEQgbVfmM4laAEmTh4dDZK4eFZs",
  authDomain: "functionstest-1d45e.firebaseapp.com",
  databaseURL: "https://functionstest-1d45e.firebaseio.com",
  projectId: "functionstest-1d45e",
  storageBucket: "functionstest-1d45e.appspot.com",
  messagingSenderId: "987207224125",
  appId: "1:987207224125:web:b6715e854c9f0917cf9354",
  measurementId: "G-HZPW04MXZM"
};

const app = initializeApp(firebaseConfig, "store");
export const storage = getStorage(app) 
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


export const firebaseConfig = {
  apiKey: "AIzaSyAvgKF7HVYq41y2UJsTJ6Lcv8bD4IN_0ek",
  authDomain: "eshop-1c921.firebaseapp.com",
  projectId: "eshop-1c921",
  storageBucket: "eshop-1c921.appspot.com",
  messagingSenderId: "112135747994",
  appId: "1:112135747994:web:db135ee57e4abc11776223"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);
export default app;
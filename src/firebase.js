import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCEs40BWdX6p9I2eBvlyKCJ-Y8NZXBnenA",
    authDomain: "wechat-81964.firebaseapp.com",
    projectId: "wechat-81964",
    storageBucket: "wechat-81964.appspot.com",
    messagingSenderId: "530456172909",
    appId: "1:530456172909:web:b4e69396352c398dbe6264"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA1wQA7jgxfH5ULo2aIs2_laNUJv1-a8uc",
  authDomain: "drobbox-clone.firebaseapp.com",
  projectId: "drobbox-clone",
  storageBucket: "drobbox-clone.firebasestorage.app",
  messagingSenderId: "346167283556",
  appId: "1:346167283556:web:aa70103ee227586bebb471",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

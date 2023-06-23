import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQiPOGej0HaWgGxS7un4QKFx7dKuNYcog",
  authDomain: "can-u-find.firebaseapp.com",
  projectId: "can-u-find",
  storageBucket: "can-u-find.appspot.com",
  messagingSenderId: "51229625862",
  appId: "1:51229625862:web:bb2eab20d931709394bd87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

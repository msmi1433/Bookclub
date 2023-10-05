import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMQ7QkWssKe2nkt3wH3VX1O1K8ayzPc9I",
  authDomain: "bookclub-personal-copy.firebaseapp.com",
  projectId: "bookclub-personal-copy",
  storageBucket: "bookclub-personal-copy.appspot.com",
  messagingSenderId: "123945536970",
  appId: "1:123945536970:web:9084b07750826ce5add333",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

import { db } from "./firebase-config";
import {setDoc, doc } from "firebase/firestore";

export const addUser = (uid: string, username: string) => {
  return setDoc(doc(db,'users',uid),{user_username: username})
  .catch((err)=>alert(err))
};
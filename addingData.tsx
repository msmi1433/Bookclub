import { db } from "./firebase-config";
import { setDoc, doc, addDoc, collection } from "firebase/firestore";

export const addUser = (uid: string, username: string) => {
  return setDoc(doc(db, "users", uid), {
    user_username: username,
    user_avatar_image: "",
    user_bio: "",
    user_bookclubs: [],
    user_fave_books: [],
  }).catch((err) => alert(err));
};

export const createBookClub = (clubData: {
  name: string;
  description: string;
  genre: string;
  img_url: string;
}) => {
  return addDoc(collection(db, "bookclubs"), clubData)
};

export const addComment = (
  clubId: string,
  chat: string,
  newComment: {
    author: string;
    date: any;
    text: string;
    title: string;
  }
) => {
  return addDoc(collection(db, "bookclubs", clubId, chat), newComment);
};

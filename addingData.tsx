import { db } from "./firebase-config";
import { setDoc, doc, addDoc, collection } from "firebase/firestore";

export const addUser = (uid: string, username: string) => {
  return setDoc(doc(db, "users", uid), { user_username: username }).catch(
    (err) => alert(err)
  );
};

export const createBookClub = (clubData: {
  name: string;
  description: string;
  genre: string;
  img_url: string;
}) => {
  return addDoc(collection(db, "bookclubs"), clubData).then((docRef) => {
    console.log(docRef.id);
    return addDoc(collection(db, "bookclubs", docRef.id, "book_chat"), {
      msg: "hi",
    });
  });
};

// export interface Book {
//   book_author: string;
//   book_title: string;
//   book_img: string;
// }

// export const updateUser = (user: {
//   uid: string;
//   user_username: string;
//   user_avatar_img: string;
//   user_bio: string;
//   user_fave_books: Book [];

 
// }) => {
//   return updateDoc(doc(db, "users", user.uid), user).catch((err) =>
//     alert(err)
//   );
// };

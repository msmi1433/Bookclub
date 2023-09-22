import { db } from "./firebase-config";
import { setDoc, doc, addDoc, collection } from "firebase/firestore";

export const addUser = (uid: string, username: string) => {
  return setDoc(doc(db, "users", uid), { user_username: username }).catch(
    (err) => alert(err)
  );
  return setDoc(doc(db,'users',uid),{user_username: username, user_avatar_image:"",user_bio:'',user_bookclubs:[],user_fave_books:[]})
  .catch((err)=>alert(err))
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



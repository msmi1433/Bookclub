import { db } from "../firebase-config";
import { setDoc, doc } from "firebase/firestore";

const users = require("./users/users.json");

function seedUsers(userData: {
  user_user_id: string,
  user_username: string;
  user_avatar_img: string;
  user_bio: string;
  user_bookclubs: string[];
  user_fave_books: {
    book_author: string;
    book_title: string;
    book_img: string;
  };
  forEach: Function;
}) {
  userData.forEach((user: any) => {
    setDoc(doc(db, "users", user.user_user_id), user);
  });
}

seedUsers(users);
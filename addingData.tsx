import { db } from "./firebase-config";

import {
  setDoc,
  doc,
  addDoc,
  collection,
  getDoc,
  updateDoc,
} from "firebase/firestore";

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
  return addDoc(collection(db, "bookclubs"), clubData);
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

export const setNextRead = (
  book: {
    title: string;
    authors: string;
    description: string;
    coverImg: string;
    averageRating: string | number;
  },
  bookclubId: string,
  stateSetter: Function
) => {
  const docRef = doc(db, "bookclubs", bookclubId);
  return getDoc(docRef)
    .then((bookclubDoc: { data: Function }) => {
      const bookclub: { next_read: {} } = bookclubDoc.data();
      return bookclub.next_read;
    })
    .then((newCurrentRead: Object) => {
      updateDoc(docRef, { current_read: newCurrentRead });
    })
    .then(() => {
      updateDoc(docRef, {
        next_read: {
          author: book.authors,
          description: book.description,
          book_name: book.title,
          img_url: book.coverImg,
        },
      });
    })
    .then(() => {
      stateSetter({
        author: book.authors,
        description: book.description,
        book_name: book.title,
        img_url: book.coverImg,
      });
    });
};

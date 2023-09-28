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
    user_avatar_img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    user_bio: "",
    user_bookclubs: [],
    user_fave_books: [{book_author:'', book_img:"https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png", book_title:""},{book_author:'', book_img:"https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png", book_title:""},{book_author:'', book_img:"https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png", book_title:""}],
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
      const bookclub: { next_read: { author: string } } = bookclubDoc.data();
      return bookclub.next_read;
    })
    .then((newCurrentRead) => {
      if (newCurrentRead.author !== "") {
        updateDoc(docRef, { current_read: newCurrentRead });
      } else {
        return;
      }
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

export const setFirstRead = (
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
  return updateDoc(docRef, {
    current_read: {
      author: book.authors,
      description: book.description,
      book_name: book.title,
      img_url: book.coverImg,
    },
  }).then(() => {
    stateSetter({
      author: book.authors,
      description: book.description,
      book_name: book.title,
      img_url: book.coverImg,
    });
  });
};

export const setFaveBook = (
  book: {
    title: string;
    authors: string;
    description: string;
    coverImg: string;
    averageRating: string | number;
  },
  userId: string,
  arrayId: number,
  faveBooks: {}[]
) => {
  const formattedBook = {
    book_author: book.authors,
    book_img: book.coverImg,
    book_title: book.title,
  };
  const updatedFaveBooks = [...faveBooks];
  updatedFaveBooks.splice(arrayId, 1, formattedBook);
  const docRef = doc(db, "users", userId);
  updateDoc(docRef, { user_fave_books: updatedFaveBooks });
};

export const leaveJoinClub = (
  uid: string,
  bookclubId: string,
  isUserMember: boolean
) => {
  const docRef = doc(db, "users", uid);
  return getDoc(docRef)
    .then((returnedDoc) => {
      return returnedDoc.data();
    })
    .then((doc) => {
      if (doc) {
        const currentClubs = doc.user_bookclubs;
        return currentClubs;
      }
    })
    .then((currentClubs) => {
      if (!isUserMember) {
        return updateDoc(docRef, {
          user_bookclubs: [...currentClubs, bookclubId],
        });
      } else {
        const newClubs = currentClubs.filter(
          (club: string) => club !== bookclubId
        );
        return updateDoc(docRef, { user_bookclubs: newClubs });
      }
    });
};

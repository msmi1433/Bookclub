import { db } from "./firebase-config";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

export const getCollection = (collectionName: string, setStateFn: Function) => {
  const collRef = collection(db, collectionName);
  return getDocs(collRef)
    .then((coll) => {
      return coll.docs.map((doc) => doc.data());
    })
    .then((mappedColl) => {
      setStateFn(mappedColl);
    });
};

export const getSingleDoc = (
  collectionName: string,
  docId: string,
  setStateFn: Function
) => {
  const docRef = doc(db, collectionName, docId);
  getDoc(docRef)
    .then((returnedDoc) => {
      return returnedDoc.data();
    })
    .then((document) => {
      setStateFn(document);
    });
};

export const getUserBookclubs = (
  collectionName: string,
  docId: string,
  setStateFn: Function
) => {
  const docRef = doc(db, collectionName, docId);
  getDoc(docRef)
    .then((returnedDoc) => {
      return returnedDoc.data();
    })
    .then((bookclubs) => {
      if (bookclubs) {
        setStateFn(bookclubs.user_bookclubs);
      } else {
        setStateFn([]);
      }
    });
};

export const getUser = ( 
  collectionName: string, 
  docId: string,
  setStateFn: Function
) => {
  const docRef = doc(db, collectionName, docId);
  getDoc(docRef)
  .then((returnedDoc) => {
    return returnedDoc.data();
  })
  .then((user) => {
    if(user){
      setStateFn(user)
    }
  })

}

export const getUserFaveBooks = (
  collectionName: string,
  docId: string,
  setStateFn: Function
) => {
  const docRef = doc(db, collectionName, docId);
  getDoc(docRef)
    .then((returnedDoc) => {
      return returnedDoc.data();
    })
    .then((faveBooks) => {
      if (faveBooks) {
        setStateFn(faveBooks.user_fave_books);
      } else {
        setStateFn([]);
      }
    });
};


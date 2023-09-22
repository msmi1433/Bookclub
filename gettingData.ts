import { db } from "./firebase-config";
import { collection, getDocs, doc, getDoc, getFirestore } from "firebase/firestore";

export const getCollection = (collectionName: string, setStateFn: Function) => {
  const collRef = collection(db, collectionName);
  return getDocs(collRef)
    .then((coll) => {
      return coll.docs.map((doc) => doc.data());
    })
    .then((mappedColl) => {
      console.log(mappedColl);
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

export const getJoinableClubs = (
  collectionName: string,
  setStateFn: Function
) => {
  const collRef = collection(db, collectionName);
  return getDocs(collRef)
    .then((coll) => {
      return coll.docs.map((doc) => doc.data());
    })
    .then((mappedColl) => {
      const bookclubs = mappedColl.map((bookclub) => {
        return bookclub.name;
      });
      setStateFn(bookclubs);
    });
};

export const getUser = (
  docId: string,
  setStateFn: Function
) => {
  const docRef = doc(db, 'users', docId);
  getDoc(docRef)
    .then((returnedDoc) => {
      return returnedDoc.data();
    })
    .then((user) => {
      if (user) {
        setStateFn(user);
      }
    })
    .catch(()=>{})
};

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

export const getUserBookclubs = (docId: string, setStateFn: Function) => {
  const docRef = doc(db, "users", docId);
  getDoc(docRef)
    .then((returnedDoc) => {
      return returnedDoc.data();
    })
    .then((returnedData) => {
      setStateFn(returnedData?.user_bookclubs);
    })
}

export const getComment = (
  docId: string,
  chat: string,
  commentId: string,
  setStateFn: Function
) => {
  const docRef= doc(db, 'bookclubs', docId, chat, commentId)
  getDoc(docRef)
  .then((returnedDoc) => {
    return returnedDoc.data(); 
  })
  .then((chatboard) => {
    if(chatboard){
      setStateFn(chatboard)
    }else{
      setStateFn([])
    }
  })

}

export const getComments = ( docId:string, chatBoard: string, setStateFn: Function) => {
  const collRef = collection(db, 'bookclubs', docId, chatBoard);
  return getDocs(collRef)
    .then((comments) => {
      return comments.docs.map((doc) => doc.data());
    })
    .then((mappedColl) => {

      setStateFn(mappedColl);
    });
};
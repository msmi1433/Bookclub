import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import { initializeAuth, getReactNativePersistence} from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
  apiKey: "AIzaSyCNk8WaDgbrpLaHewgmn7mDNzR10zUuvPk",
  authDomain: "bookclub-899af.firebaseapp.com",
  projectId: "bookclub-899af",
  storageBucket: "bookclub-899af.appspot.com",
  messagingSenderId: "761146729032",
  appId: "1:761146729032:web:bcc7778bf6433642e5ae7d"
};


const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app)

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(app)
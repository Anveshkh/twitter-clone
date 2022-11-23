// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import firebase from "firebase"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  query
} from 'firebase/firestore'


// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBXXIYMDDOVRofJWaKqDdAaAa6kjYlLSDU",
  authDomain: "twitter-clone-e2cac.firebaseapp.com",
  projectId: "twitter-clone-e2cac",
  storageBucket: "twitter-clone-e2cac.appspot.com",
  messagingSenderId: "491151440221",
  appId: "1:491151440221:web:f6244e5323aa0bb67910b4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const getCollectionAndDocuments = async() => {
  const collectionRef = collection(db, 'posts');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const posts = querySnapshot.docs.map((doc) => doc.data())
  console.log(posts)
  return posts;
}

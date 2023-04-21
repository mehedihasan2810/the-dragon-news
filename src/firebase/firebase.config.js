// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsgv3xdq0GHs7kYk5pyXNXgLtZOgY0yOg",
  authDomain: "the-news-dragon-a5b22.firebaseapp.com",
  projectId: "the-news-dragon-a5b22",
  storageBucket: "the-news-dragon-a5b22.appspot.com",
  messagingSenderId: "390517572382",
  appId: "1:390517572382:web:d38c629eda6469808dff0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
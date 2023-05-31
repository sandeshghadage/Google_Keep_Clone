// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC18_EkerXqlrHpk59uCs6BjTQ-J1U3AjA",
  authDomain: "keep-clone-ee8fc.firebaseapp.com",
  projectId: "keep-clone-ee8fc",
  storageBucket: "keep-clone-ee8fc.appspot.com",
  messagingSenderId: "821065488358",
  appId: "1:821065488358:web:f7ecd92b44d8e4be6fe827",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;

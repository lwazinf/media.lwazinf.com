import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {

  apiKey: "AIzaSyB8jUeLWNTOd7G-IplGQhrcLkq6iQ3MkTE",
  authDomain: "whoseinn-a2714.firebaseapp.com",
  projectId: "whoseinn-a2714",
  storageBucket: "whoseinn-a2714.appspot.com",
  messagingSenderId: "769523083664",
  appId: "1:769523083664:web:5c52ef0ba06231b34d6b15",
  measurementId: "G-WTGE3SXEE7"

};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
const store = getStorage();

export { db, store };
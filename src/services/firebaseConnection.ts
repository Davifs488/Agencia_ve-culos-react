import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDNybCE-d5MsLxldS1G9cFO4ah_5ZMX2Hk",
  authDomain: "webcar-dav.firebaseapp.com",
  projectId: "webcar-dav",
  storageBucket: "webcar-dav.appspot.com",
  messagingSenderId: "965388819676",
  appId: "1:965388819676:web:6c022564f2674d5588a819",
};

const app = initializeApp(firebaseConfig);

const db = getAuth(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };

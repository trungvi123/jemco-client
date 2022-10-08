import { getDatabase  } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCFYdBGXkRpT7mvixzMmHohWBuzenITDGQ",
    authDomain: "jemcoclient-e5c33.firebaseapp.com",
    projectId: "jemcoclient-e5c33",
    storageBucket: "jemcoclient-e5c33.appspot.com",
    messagingSenderId: "213975107478",
    appId: "1:213975107478:web:a43c91fd2a818ebe91ffb7",
    measurementId: "G-JBYXNJ55DX",
    databaseURL: "https://jemcoclient-e5c33-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {database}
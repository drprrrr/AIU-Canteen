// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpoefTp84g27CK_cmnPGB_v6HuDnwnV5I",
    authDomain: "order-samsa.firebaseapp.com",
    projectId: "order-samsa",
    storageBucket: "order-samsa.appspot.com",
    messagingSenderId: "471644864493",
    appId: "1:471644864493:web:02271802357d00d25371e4",
    measurementId: "G-4DKMDZMFN1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);

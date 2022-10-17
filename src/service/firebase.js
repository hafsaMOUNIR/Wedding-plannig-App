import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyBxSQrEL2N_hVl1_UAjwIxefi_WFch4z-w",
//     authDomain: "chronomariage.firebaseapp.com",
//     projectId: "chronomariage",
//     storageBucket: "chronomariage.appspot.com",
//     messagingSenderId: "278542700308",
//     appId: "1:278542700308:web:9262d74840162ed141bc01",
//     measurementId: "G-MW47Q1GJTR"
// };
const firebaseConfig = {
    apiKey: "AIzaSyDMaGXJklEbYNskD6tvnho4WS0KMm1dT1Q",
    authDomain: "alfmbrouk-96d98.firebaseapp.com",
    projectId: "alfmbrouk-96d98",
    storageBucket: "alfmbrouk-96d98.appspot.com",
    messagingSenderId: "184768960888",
    appId: "1:184768960888:web:ecf8c16ba5acf22542d08d",
    measurementId: "G-8QD93TWSRY"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db ; 
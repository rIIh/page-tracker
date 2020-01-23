// @ts-ignore
import firebase from "firebase";

const firebase_config = {
    apiKey: "AIzaSyD1Hd0yKEjIg9tpnDNJoUzIS4Lr_1HvuMA",
    authDomain: "page-ra.firebaseapp.com",
    databaseURL: "https://page-ra.firebaseio.com",
    projectId: "page-ra",
    storageBucket: "page-ra.appspot.com",
    messagingSenderId: "76840266860",
    appId: "1:76840266860:web:ea87227a223f3deb2c3c49",
    measurementId: "G-93RJ3FC7TY"
};
export const Firebase = firebase.initializeApp(firebase_config);


// const databaseRef = firebase.database().ref();
//
// export const trackersRef = databaseRef.child("trackers");

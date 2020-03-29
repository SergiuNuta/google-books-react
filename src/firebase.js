import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDBa_z_k4Fc-jmoUNLV0l_uwVo7nmXQTW0",
    authDomain: "books-86df2.firebaseapp.com",
    databaseURL: "https://books-86df2.firebaseio.com",
    projectId: "books-86df2",
    storageBucket: "books-86df2.appspot.com",
    messagingSenderId: "611327615155",
    appId: "1:611327615155:web:da445cdbca854346dc90c6",
    measurementId: "G-9F9SH54N69"
};

firebase.initializeApp(firebaseConfig);

export const providers = {
    google: new firebase.auth.GoogleAuthProvider()
}

export const firestore = firebase.firestore();


export default firebase;
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDvgQ4Pv3Tr97WzGpxa_S4x0Sd7VJf8i9M",
    authDomain: "books-two.firebaseapp.com",
    databaseURL: "https://books-two.firebaseio.com",
    projectId: "books-two",
    storageBucket: "books-two.appspot.com",
    messagingSenderId: "854392490309",
    appId: "1:854392490309:web:e4e049f74d22ea31c6962c"
    // apiKey: "AIzaSyB0seXccvK4y9EfPBho86Aj0WcTtjfeEa8",
    // authDomain: "books-86df2.firebaseapp.com",
    // databaseURL: "https://books-86df2.firebaseio.com",
    // projectId: "books-86df2",
    // storageBucket: "books-86df2.appspot.com",
    // messagingSenderId: "611327615155",
    // appId: "1:611327615155:web:da445cdbca854346dc90c6",
    // measurementId: "G-9F9SH54N69"
    // apiKey: "AIzaSyDBa_z_k4Fc-jmoUNLV0l_uwVo7nmXQTW0",
    // authDomain: "books-86df2.firebaseapp.com",
    // databaseURL: "https://books-86df2.firebaseio.com",
    // projectId: "books-86df2",
    // storageBucket: "books-86df2.appspot.com",
    // messagingSenderId: "611327615155",
    // appId: "1:611327615155:web:da445cdbca854346dc90c6",
    // measurementId: "G-9F9SH54N69"
};

firebase.initializeApp(firebaseConfig);

export const providers = {
    google: new firebase.auth.GoogleAuthProvider()
}

export const firestore = firebase.firestore();


export default firebase;
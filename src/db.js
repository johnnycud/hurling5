import Firebase from 'firebase/app'
let config = {
    apiKey: "AIzaSyD8LhC0IcWm8NzapwXjHffscAgXA-H50XA",
    authDomain: "my-hurling-app.firebaseapp.com",
    databaseURL: "https://my-hurling-app.firebaseio.com",
    projectId: "my-hurling-app",
    storageBucket: "my-hurling-app.appspot.com",
    messagingSenderId: "1044534602167"
};
let app = Firebase.initializeApp(config)
export const db = app.database()
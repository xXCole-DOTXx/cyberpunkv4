import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDVyMU4XZEaLmT17ksu2S6ndnypNwL555s",
    authDomain: "cyberpunkprojv1.firebaseapp.com",
    databaseURL: "https://cyberpunkprojv1.firebaseio.com",
    projectId: "cyberpunkprojv1",
    storageBucket: "cyberpunkprojv1.appspot.com",
    messagingSenderId: "837539155372",
    appId: "1:837539155372:web:e52a4bd30fd0c9da29be09",
    measurementId: "G-JGRZT5YX0Q"
};

export const init = () => {
    return firebase.initializeApp(firebaseConfig);
}


export const createUser = (user) =>
    firebase.firestore().collection('users').doc(user.userName).set(user); // I need to know how to create a subcollection when creating a document


export const getAllUsers = () => firebase.firestore().collection('users').get(); //This line does not work right now.

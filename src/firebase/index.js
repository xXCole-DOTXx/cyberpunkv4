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

//Use export to be able to call this elsewhere
export const createUser = (user) =>
    firebase.firestore().collection('users').doc(user.userName).set(user); // I need to know how to create a subcollection when creating or maybe just updating a document


export const getAllUsers = () => firebase.firestore().collection('users').get(); 

export const getUserInfo = (user) =>
    firebase.firestore().collection('users').doc(user).get();

export const initializeSolo = (playerName, Combat_Sense, Awareness_Notice, Handgun, Brawling, Melee, Weapons_Tech, Rifle, Athletics, Submachinegun, Stealth) =>
    firebase.firestore().collection('users').doc(playerName).update({
        "Spcial_Abilities.Combat_Sense": Combat_Sense,
        "Intelligence.Awareness_Notice": Awareness_Notice,
        "Reflex.Handgun": Handgun,
        "Reflex.Brawling": Brawling,
        "Reflex.Melee": Melee,
        //I cant find weapons tech??
        "Reflex.Rifle": Rifle,
        "Reflex.Athletics": Athletics,
        "Reflex.Submachinegun": Submachinegun,
        "Reflex.Stealth": Stealth
    });


//https://rnfirebase.io/firestore/usage#snapshots  - good resourace for querying firebase

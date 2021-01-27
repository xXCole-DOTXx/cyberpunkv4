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

//@@@@@@@@@ TEST THESE VARIABLES TO MAKE SURE THAT THEY DONT MESS UP DESPITE BEING THE SAME NAME @@@@@@@@@@@@@@@@@@

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

    export const initializeRockerboy = (playerName, leadership, awareness, perform, style, composition, brawling, playInstrument, streetwise, persuasion, seduction) =>
    firebase.firestore().collection('users').doc(playerName).update({
        "Spcial_Abilities.Charismatic_Leadership": leadership,
        "Intelligence.Awareness_Notice": awareness,
        "Empathy.Perform": perform,
        "Attractivness.Wardrobe_Style": style,
        "Intelligence.Composition": composition,
        "Reflex.Brawling": brawling,
        "Technology.Play_Instrument": playInstrument,
        "Cool.Streetwise": streetwise,
        "Empathy.Persuasion_Fast_Talk": persuasion,
        "Empathy.Seduction": seduction
    });

    export const initializeNomad = (playerName, family, awareness, endurance, melee, rifle, drive, basicTech, wildernessSurvival, brawling, athletics) =>
    firebase.firestore().collection('users').doc(playerName).update({
        "Spcial_Abilities.Family": family,
        "Intelligence.Awareness_Notice": awareness,
        "Body.Endurance": endurance,
        "Reflex.Melee": melee,
        "Reflex.Rifle": rifle,
        "Reflex.Brawling": brawling,
        "Reflex.Driving": drive,
        "Technology.Basic_Tech": basicTech,
        "Intelligence.Wilderness_Survival": wildernessSurvival,
        "Reflex.Athletics": athletics
    });

    export const initializeNetRunner = (playerName, netInterface, awareness, basicTech, education, system_knowledge, cyberTech, cyberDeck_design, composition, electronics, programming) =>
    firebase.firestore().collection('users').doc(playerName).update({
        "Spcial_Abilities.Interface": netInterface,
        "Intelligence.Awareness_Notice": awareness,
        "Technology.Basic_Tech": basicTech,
        "Intelligence.Education_Gen_Knowledge": education,
        "Technology.System_Knowledge": system_knowledge,
        "Technology.CyberTech": cyberTech,
        "Technology.Cyberdeck_Design": cyberDeck_design,
        "Intelligence.Composition": composition,
        "Technology.Electronics": electronics,
        "Intelligence.Programming": programming
    });

    export const initializeCorp = (playerName, resources, awareness, humanPerception, education, librarySearch, socail, persuasion, stockMarket, wardrobe_style, personalGrooming) =>
    firebase.firestore().collection('users').doc(playerName).update({
        "Spcial_Abilities.Resources": resources,
        "Intelligence.Awareness_Notice": awareness,
        "Empathy.Human_Perception": humanPerception,
        "Intelligence.Education_Gen_Knowledge": education,
        "Intelligence.Library_Search": librarySearch,
        "Empathy.Socail": socail,
        "Empathy.Persuasion_Fast_Talk": persuasion,
        "Intelligence.Stock_Market": stockMarket,
        "Attractivness.Wardrobe_Style": wardrobe_style,
        "Attractivness.Personal_Grooming": personalGrooming
    });

    //Needs edited
    export const initializeTechie = (playerName, juryRig, awareness, basicTech, education, cyberTech, teaching, electronics) =>
    firebase.firestore().collection('users').doc(playerName).update({
        "Spcial_Abilities.Jury_Rig": juryRig,
        "Intelligence.Awareness_Notice": awareness,
        "Technology.Basic_Tech": basicTech,
        "Intelligence.Education_Gen_Knowledge": education,
        "Technology.CyberTech": cyberTech,
        "Intelligence.Teaching": teaching,
        "Technology.Electronics": electronics
    });

    export const initializeMedTech = (playerName, medicalTech, awareness, humanPerception, education, librarySearch, diagnose, cyrotankOperation, basicTech, zoology, pharmaceuticals) =>
    firebase.firestore().collection('users').doc(playerName).update({
        "Spcial_Abilities.Medical_Tech": medicalTech,
        "Intelligence.Awareness_Notice": awareness,
        "Empathy.Human_Perception": humanPerception,
        "Intelligence.Education_Gen_Knowledge": education,
        "Intelligence.Library_Search": librarySearch,
        "Intelligence.Diagnose_Illness": diagnose,
        "Technology.Cryotank_Operation": cyrotankOperation,
        "Technology.Basic_Tech": basicTech,
        "Intelligence.Zoology": zoology,
        "Technology.Pharmacuticals": pharmaceuticals
    });

    export const initializeMedia = (playerName, credibility, awareness, humanPerception, education, composition, socail, persuasion, streetwise, photo, interview) =>
    firebase.firestore().collection('users').doc(playerName).update({
        "Spcial_Abilities.Credibility": credibility,
        "Intelligence.Awareness_Notice": awareness,
        "Empathy.Human_Perception": humanPerception,
        "Intelligence.Education_Gen_Knowledge": education,
        "Intelligence.Composition": composition,
        "Empathy.Social": socail,
        "Empathy.Persuasion_Fast_Talk": persuasion,
        "Cool.Streetwise": streetwise,
        "Technology.Photo_Film": photo,
        "Empathy.Interview": interview
    });

    export const initializeCop = (playerName, authority, awareness, humanPerception, education, handgun, athletics, brawling, streetwise, melee, interrogation) =>
    firebase.firestore().collection('users').doc(playerName).update({
        "Spcial_Abilities.Authority": authority,
        "Intelligence.Awareness_Notice": awareness,
        "Empathy.Human_Perception": humanPerception,
        "Intelligence.Education_Gen_Knowledge": education,
        "Reflex.Handgun": handgun,
        "Reflex.Athletics": athletics,
        "Reflex.brawling": brawling,
        "Cool.Streetwise": streetwise,
        "Reflex.Melee": melee,
        "Cool.Interrogation": interrogation
    });

    export const finilizePlayer = (playerName, player) =>
    firebase.firestore().collection('users').doc(playerName).update(player);


//https://rnfirebase.io/firestore/usage#snapshots  - good resourace for querying firebase

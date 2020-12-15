import * as firebase from '../firebase'; 

//Use export to be able to call this elsewhere
export const fetchCharDetails = async () => {
    try{
        const user = await firebase.getUserInfo();
        // users is a QuerySnapshot
        // Not sure what to do from here really.
        return user;
    } catch (error) {
        console.log(error);
    }
}
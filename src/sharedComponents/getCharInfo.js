import * as firebase from '../firebase'; 

//Use export to be able to call this elsewhere
export const getCharInfo = async (playerName) => {
    try{
        const user = await firebase.getUserInfo(playerName);
        // user is a DocumentSnapshot (hopefully)
        return user.data();
    } catch (error) {
        console.log(error);
    }
}
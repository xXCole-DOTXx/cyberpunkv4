import * as firebase from '../firebase'; 

//Use export to be able to call this elsewhere
export const getCharInfo = async (playerName) => {
    try{
        const user = await firebase.getUserInfo(playerName);
        // user is a DocumentSnapshot (hopefully)
        console.log(user.data());
        console.log(user.data().Role);
        console.log(user.data().stats.Cool);
        return user;
    } catch (error) {
        console.log(error);
    }
}
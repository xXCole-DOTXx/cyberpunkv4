import * as firebase from '../firebase'; 

//Use export to be able to call this elsewhere
export const userFetch = async () => {
    var userList = [];
    try{
        const users = await firebase.getAllUsers();
        // users is a QuerySnapshot
        if (users.size > 0) {
            users.forEach(doc => {
                userList.push(doc.data().userName);
            })
        }

    } catch (error) {
        console.log(error);
    }
    //userList.forEach(item => console.log(item)); //usreList contains all of the names. This works.
    return userList;
}

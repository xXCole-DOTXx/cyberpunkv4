import * as firebase from '../firebase'; 

//Use export to be able to call this elsewhere
export const userCreate = async (selectedName, selectedRole, charInt, charRef, charTech, charCool, charAttr, charLuck, charMa, charBody, charEmp) => {
    try{
        //Construct a user obj
        const user = {
            Role: selectedRole,
            userName: selectedName,
            stats : {
              Int: charInt,
              Ref: charRef,
              Tech: charTech,
              Cool: charCool,
              Attr: charAttr,
              Luck: charLuck,
              MA: charMa,
              Body: charBody,
              Emp: charEmp
            }
        }

        await firebase.createUser(user);

    } catch (error) {
        console.log(error);
    }
}
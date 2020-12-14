import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Picker, ScrollView} from 'react-native'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import * as firebase from '../../firebase'; 

const CharacterSelectScreen = ({navigation, route}) => {
    
    var userList= [];
       React.useEffect(()=>{
        console.log('Select Screen loaded.')
        userFetch();
      },[])

    const userFetch = async () => {
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
        userList.forEach(item => console.log(item)); //usreList contains all of the names. This works.
        return userList;
    }


    return (
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <Text>Select a character:</Text>
      </View>
    )
}


export default CharacterSelectScreen;
import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Picker, ScrollView} from 'react-native'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import * as firebase from '../../firebase'; 

const CharacterSelectScreen = ({navigation, route}) => {

       React.useEffect(()=>{
        console.log('Select Screen loaded.')
        userFetch();
      },[])

    const userFetch = async () => {
        try{
            await firebase.init();
    
            const users = await firebase.getAllUsers();
            // users is a QuerySnapshot. A QuerySnapshot contains zero or more QueryDocumentSnapshot objects representing the results of a query.
            if (users.size > 0) {
                users.forEach(doc => {
                    console.log(doc.data())
                })
            }

    
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <Text>Select a character:</Text>
      </View>
    )
}


export default CharacterSelectScreen;
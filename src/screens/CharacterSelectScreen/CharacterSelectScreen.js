import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Picker, ScrollView} from 'react-native'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { userFetch } from '../../sharedComponents/userFetch.js';

const CharacterSelectScreen = ({navigation, route}) => {
    
       React.useEffect(()=>{
        console.log('Select Screen loaded.')
        userFetch();
      },[])

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <Text>Select a character:</Text>
      </View>
    )
}


export default CharacterSelectScreen;
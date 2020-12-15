import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Picker, ScrollView} from 'react-native'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { userFetch } from '../../sharedComponents/userFetch.js';
import { styles } from './styles.js';

const CharacterSkillScreen = ({navigation, route}) => {
    //Getting params passed from HomeScreen
    const { playerName } = route.params;
  
    return (
        <View>
            <Text>Player Name: {playerName}</Text>
        </View>
    )
}

export default CharacterSkillScreen;
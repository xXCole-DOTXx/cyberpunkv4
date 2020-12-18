import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Picker, ScrollView} from 'react-native'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { userFetch } from '../../sharedComponents/userFetch.js';
import { styles } from './styles.js';
import { getCharInfo } from '../../sharedComponents/getCharInfo.js';

const CharacterSkillScreen = ({navigation, route}) => {
    //Getting params passed from HomeScreen
    const { playerName } = route.params;
    const [player, setPlayer] = useState([]);

     //Using React.useEffect to simulate React's #componentDidMount
     React.useEffect(()=>{
        console.log('Skill Sheet loaded.')
        //Must use an async function to call the userFetch function then set the result equal to characterList
        const asyncFunc = async () => {
          const character = await getCharInfo(playerName);
          setPlayer(character);
          console.log(character.data().Role);
        }
        //Call the async function
        asyncFunc();
      },[])
  
    return (
        <View style={styles.container}>
            <Text>Player Name: {playerName}</Text>
            <Text>Player Role: {player.data().Role}</Text>

            <View style={styles.stats}>
              <Text>Int: {player.data().stats.Int}</Text>
              <Text>Ref: {player.data().stats.Ref}</Text>
              <Text>Cool: {player.data().stats.Cool}</Text>
            </View>
        </View>
    )
}

export default CharacterSkillScreen;
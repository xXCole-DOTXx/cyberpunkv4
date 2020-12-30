import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Picker, ScrollView} from 'react-native'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles.js';
import { getCharInfo } from '../../sharedComponents/getCharInfo.js';

const CareerPointsScreen = ({navigation, route}) => {
    //Getting params passed from HomeScreen
    const { playerName } = route.params;
    const [player, setPlayer] = useState(); //Examples of using hooks.
    const [skillPoints, setPoints] =useState(40); 
    const [special, setSpecial] = useState(0);

     //Using React.useEffect to simulate React's #componentDidMount
     React.useEffect(()=>{
        console.log('Career screen loaded.')
        //Must use an async function to call the userFetch function then set the result equal to characterList
        const asyncFunc = async () => {
          const character = await getCharInfo(playerName);
          setPlayer(character);
        }
        //Call the async function
        asyncFunc();
      },[])
  

    return (
        <View style={styles.container}>
            {player?.data()?.userName && <Text>{player?.data()?.userName}</Text>}
            {player?.data()?.Role == "Solo" && <Text>{player?.data()?.Role}</Text>}

            {player?.data()?.Role == "Rockerboy" && 
            <View>
            
            </View>}

            {player?.data()?.Role == "Solo" && 
            <View>
      
            </View>}

        </View>
    )
}

export default CareerPointsScreen;
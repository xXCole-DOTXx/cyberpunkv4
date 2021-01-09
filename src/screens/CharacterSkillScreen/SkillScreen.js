import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Picker, ScrollView} from 'react-native'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles.js';
import { getCharInfo } from '../../sharedComponents/getCharInfo.js';
import { List } from 'react-native-paper';

// Destructuring objects >> https://dmitripavlutin.com/javascript-object-destructuring/

const SkillScreen = ({navigation, route}) => {
    //Getting params passed from HomeScreen
    const { playerName } = route.params;
    const [player, setPlayer] = useState(null);

    //This is for controller the expanding and collapsing
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);

   //Using React.useEffect to simulate React's #componentDidMount
   React.useEffect(()=>{
    console.log('Skill Sheet loaded.')
    //Must use an async function to call the userFetch function then set the result equal to characterList
    const asyncFunc = async () => {
      playerSnapshot = await getCharInfo(playerName);
      setPlayer(playerSnapshot);
    }
    //Call the async function
    asyncFunc();
  },[]);

  if (!player) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  } else {
     const {userName, Role} = player;
     return (
        <ScrollView>
          <View>  
            <Text>{userName}</Text>
           
          </View>
        </ScrollView>
      )
  }
  
   return (
        <ScrollView>
          <View>  
          
           
          </View>
        </ScrollView>
      )
}

export default SkillScreen;
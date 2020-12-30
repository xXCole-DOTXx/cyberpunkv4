import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Picker, ScrollView} from 'react-native'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles.js';
import { getCharInfo } from '../../sharedComponents/getCharInfo.js';

const RockerboyCareerScreen = ({navigation, route}) => {
    //Getting params passed from HomeScreen
    const { playerName } = route.params;
    const [player, setPlayer] = useState(); //Examples of using hooks.
    const [skillPoints, setPoints] =useState(40); 
    const [leadership, setLeadership] = useState(0);
    const [awareness, setAwareness] = useState(0);
    const [perform, setPerform] = useState(0);
    const [style, setStyle] = useState(0);
    const [composition, setComposition] = useState(0);
    const [brawling, setBrawling] = useState(0);
    const [playInstrument, setPlayInstrument] = useState(0);
    const [streetwise, setStreetWise] = useState(0);
    const [persuasion, setPersuasion] = useState(0);
    const [seduction, setSeduction] = useState(0);
  

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
            <Text>You have {skillPoints} remaining.</Text>

            <View style={styles.item2}>
                {/* Leadership buttons */}
                <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && leadership < 10){
                    setLeadership(leadership + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setLeadership(leadership);
                    }
                  }}
                  />
                  
                  Charismatic Leadership: {leadership}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(leadership > 0){
                    setLeadership(leadership - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setLeadership(leadership);
                    }
                  }}
                  />
                </Text>
            </View>
        </View>
    )
}

export default RockerboyCareerScreen;
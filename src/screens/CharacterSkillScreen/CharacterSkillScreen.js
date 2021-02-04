import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Picker, ScrollView} from 'react-native'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles.js';
import { getCharInfo } from '../../sharedComponents/getCharInfo.js';
import { List } from 'react-native-paper';
import { MaterialCommunityIcons} from 'react-native-vector-icons';
import { finilizePlayer } from '../../firebase/index.js';
import { Rockerboy_MODS } from '../../cfg/index.js'; 
import { Solo_MODS } from '../../cfg/index.js'; 

// Destructuring objects >> https://dmitripavlutin.com/javascript-object-destructuring/

//NEED TO ADD LUCK AND MA
//What do I do about use state for each of the player stats? How am I going to update all of the points?
const CharacterSkillScreen = ({navigation, route}) => {
    //Getting params passed from HomeScreen
    const { playerName } = route.params;
    const { pickupPoints } = route.params;
    const [player, setPlayer] = useState(null);
    const [pickPoints, setPickPoints] = useState(pickupPoints);

    //This is for controller the expanding and collapsing
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);

   //Using React.useEffect to simulate React's #componentDidMount
   React.useEffect(()=>{
    console.log('Skill Sheet loaded.')
    //Must use an async function to call the userFetch function then set the result equal to characterList
    const asyncFunc = async () => {
      playerInfo = await getCharInfo(playerName);
      setPlayer(playerInfo);
    }
    //Call the async function
    asyncFunc();
  },[]);

  const addPointToSkill = (cat, subCat) => {
    if (player[cat][subCat] < 10 && pickPoints > 0) {
      setPlayer(
      {
        ...player, // spread operator 
        [cat]: {
          ...player[cat], 
          [subCat]: player[cat][subCat] + 1
          }
      });
      setPickPoints(pickPoints - 1);
    }
  }

  const subPointFromSkill = (cat, subCat) => {
    if (player[cat][subCat] > 0) {
      setPlayer(
      {
        ...player, // spread operator 
        [cat]: {
          ...player[cat], 
          [subCat]: player[cat][subCat] - 1
          }
      });
      setPickPoints(pickPoints + 1);
    }
  }

  const ModifyPointsButton = ({value, handlePointsAdd, handlePointsSubtract}) => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <MaterialCommunityIcons name="minus-circle" size={20} color={pickPoints ? "red" : "grey"} onPress={handlePointsSubtract} />
        <Text style={{marginHorizontal: 8,}}>{value}</Text>
        <MaterialCommunityIcons name="plus-circle" size={20} color={pickPoints ? "green" : "grey"} onPress={handlePointsAdd} />
      </View>
    )
  }

  if (!player) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  } else {
    //1.) I don't like that the order changes every time. I'd like for the order to stay the same.
    //2.) I'd like to show the value of each stat but those values are saved in stats so they are not child keys
    //3.) How do I exclude pickup skills from the list?
    switch(player.Role){
      case "Rockerboy":
        return (
          <ScrollView>
            <View style={styles.container}>
              <List.Section title={"Pickup Points: " + pickPoints}>
                { 
                  Object.keys(player).map(key => (key!="userName" && key!="stats" && key!="Spcial_Abilities" && key!="Role") && (
                    <List.Accordion title={key} key={key}>
                      {Object.keys(player[key]).map(childKey => {  //If childkey = Charismatic Leadership, Awareness, perform, wardrobe, composition, brawling, play instrument, streetwise, persuasin, or seduction then dont show.
                          const value = player[key][childKey]; //childkey is the skill that I need to check against
                    
                          const render = () => (<List.Item 
                            title={`${childKey}`} 
                            right={() => (<ModifyPointsButton value={value} handlePointsAdd={() => addPointToSkill(key, childKey)} pickPoints={pickPoints} />)}  
                          />)
      
                      if (!(key in Rockerboy_MODS)) {
                        return (
                          <List.Item 
                            title={`${childKey}`} 
                            right={() => (<ModifyPointsButton value={value} handlePointsAdd={() => addPointToSkill(key, childKey)} pickPoints={pickPoints} />)}  
                          />
                        )
                      } else if (Rockerboy_MODS[key].indexOf(childKey) === -1) { 
                        return (
                          <List.Item 
                            title={`${childKey}`} 
                            right={() => (<ModifyPointsButton value={value} handlePointsAdd={() => addPointToSkill(key, childKey)} pickPoints={pickPoints} />)}  
                          />
                        )
                        }
                      }
                      )}
                    </List.Accordion>
                  ))
                }
              </List.Section>
              <Button
                  title="Submit"
                  onPress={() => {
                    finilizePlayer(playerName, player);
                    navigation.navigate('Home');
              }}
                  color="#19AC52"
              />
            </View>
          </ScrollView>
        )
      case "Solo":
        return (
          <ScrollView>
          <View style={styles.container}>
            <List.Section title={"Pickup Points: " + pickPoints}>
              { 
                Object.keys(player).map(key => (key!="userName" && key!="stats" && key!="Spcial_Abilities" && key!="Role") && (
                  <List.Accordion title={key} key={key}>
                    {Object.keys(player[key]).map(childKey => {  //If childkey = Charismatic Leadership, Awareness, perform, wardrobe, composition, brawling, play instrument, streetwise, persuasin, or seduction then dont show.
                        const value = player[key][childKey]; //childkey is the skill that I need to check against
                  
                        const render = () => (<List.Item 
                          title={`${childKey}`} 
                          right={() => (<ModifyPointsButton value={value} handlePointsAdd={() => addPointToSkill(key, childKey)} pickPoints={pickPoints} />)}  
                        />)
    
                    if (!(key in Solo_MODS)) {
                      return (
                        <List.Item 
                          title={`${childKey}`} 
                          right={() => (<ModifyPointsButton value={value} handlePointsAdd={() => addPointToSkill(key, childKey)} pickPoints={pickPoints} />)}  
                        />
                      )
                    } else if (Solo_MODS[key].indexOf(childKey) === -1) { 
                      return (
                        <List.Item 
                          title={`${childKey}`} 
                          right={() => (<ModifyPointsButton value={value} handlePointsAdd={() => addPointToSkill(key, childKey)} pickPoints={pickPoints} />)}  
                        />
                      )
                      }
                    }
                    )}
                  </List.Accordion>
                ))
              }
            </List.Section>
            <Button
                title="Submit"
                onPress={() => {
                  finilizePlayer(playerName, player);
                  navigation.navigate('Home');
            }}
                color="#19AC52"
            />
          </View>
        </ScrollView>
        )
      default:
        return (
          <ScrollView>
            <View style={styles.container}>
              <List.Section title={"Pickup Points: " + pickPoints}>
                {
                  Object.keys(player).map(key => (key!="userName" && key!="stats" && key!="Spcial_Abilities" && key!="Role") && (
                    <List.Accordion title={key} key={key}>
                      {Object.keys(player[key]).map(childKey => {
                          const value = player[key][childKey]; //childkey is the skill that I need to check against
                          return (
                            <List.Item 
                              title={`${childKey}`} 
                              key={childKey}
                              right={() => (<ModifyPointsButton value={value} handlePointsAdd={() => addPointToSkill(key, childKey)} handlePointsSubtract={() => subPointFromSkill(key, childKey)} />)} 
                            />
                          )
                          
                      }
                      )}
                    </List.Accordion>
                  ))
                }
              </List.Section>
              <Button
                  title="Submit"
                  onPress={() => {
                    finilizePlayer(playerName, player);
                    navigation.navigate('Home');
              }}
                  color="#19AC52"
              />
            </View>
          </ScrollView>
        )
    }
    
  }

}

export default CharacterSkillScreen;
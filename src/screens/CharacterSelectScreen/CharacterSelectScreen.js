import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Picker, ScrollView} from 'react-native'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { userFetch } from '../../sharedComponents/userFetch.js';

const CharacterSelectScreen = ({navigation, route}) => {
  const [characterList, setCharacterList] = useState([]);
  const [selectedValue, setSelectedValue] = useState("Choose..");

  //Using React.useEffect to simulate React's #componentDidMount
       React.useEffect(()=>{
        console.log('Select Screen loaded.')
        //Must use an async function to call the userFetch function then set the result equal to characterList
        const asyncFunc = async () => {
          const charList = await userFetch();
          setCharacterList(charList);
        }
        //Call the async function
        asyncFunc();
      },[])

    return (
        <View style={styles.container}>
            <Text>Select a character:</Text>
            <Picker
              style={styles.charPicker}
              mode="dropdown"
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
              {characterList.map((item, index) => {
                  return (<Picker.Item label={item} value={item} key={index}/>) 
              })}
          </Picker>
          <Button
                title="Submit"
                        onPress={() => {
                             /* 1. Navigate to the Character Skill Sheet route with params */
                             navigation.navigate('CharacterSkillScreen', {
                              playerName: selectedValue
                            });
                        }}
                color="#19AC52"
            />
      </View>
    )
}

//Character Select stylesheet
const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'flex-start' 
  },

  charPicker: {
    flex: 2, 
    justifyContent: 'flex-start' 
  }

});


export default CharacterSelectScreen;
import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Picker, ScrollView} from 'react-native'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { userFetch } from '../../sharedComponents/userFetch.js';

const CharacterSelectScreen = ({navigation, route}) => {
  const [results, setResults] = useState([]);
  const [selectedValue, setSelectedValue] = useState("Choose..");

       React.useEffect(()=>{
        console.log('Select Screen loaded.')
        const asyncFunc = async () => {
          const response = await userFetch();
          setResults(response);
        }
        asyncFunc();
      },[])

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <Text>Select a character:</Text>
            <Picker
              mode="dropdown"
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
              {results.map((item, index) => {
                  return (<Picker.Item label={item} value={index} key={index}/>) 
              })}
          </Picker>
      </View>
    )
}


export default CharacterSelectScreen;
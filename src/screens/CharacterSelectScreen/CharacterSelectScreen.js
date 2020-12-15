import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Picker, ScrollView} from 'react-native'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { userFetch } from '../../sharedComponents/userFetch.js';

const CharacterSelectScreen = ({navigation, route}) => {
  const [results, setResults] = useState([]);

       React.useEffect(()=>{
        console.log('Select Screen loaded.')
        const asyncFunc = async () => {
          const response = await userFetch();
          setResults(response);
        }
        asyncFunc();
      },[])

      console.log(results);

      const numbers = [1, 2, 3, 4, 5];
      const listItems = numbers.map((number) => <Text>{number}</Text>);

      const charItems = results.map((character) => <Text>{character}</Text>);


    return (
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <Text>Select a character:</Text>
            <Text>{listItems}</Text>
            <Text>{charItems}</Text>
      </View>
    )
}


export default CharacterSelectScreen;
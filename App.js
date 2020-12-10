import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CharacterCreateScreen from './src/screens/CharacterCreateScreen/CharacterCreateScreen';
import CharacterSelectScreen from './src/screens/CharacterSelectScreen/CharacterSelectScreen';
import * as firebase from './src/firebase'; 

//Used this until the end of step 3.
//https://www.freecodecamp.org/news/react-native-firebase-tutorial/
//This app currently uses stateless function components :: https://stackoverflow.com/questions/57762163/const-vs-class-functions-is-react-native
const Stack = createStackNavigator();

export default function App() {

  //Function to initialize database
  const dbInit = async () => {
    try{
        await firebase.init();
    } catch (error) {
        console.log(error);
    }
  }

  //Initialize database
  dbInit();

  return (
    <NavigationContainer initialRouteName ='Home'>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="CharacterCreate" component={CharacterCreateScreen}></Stack.Screen>
        <Stack.Screen name="CharacterSelect" component={CharacterSelectScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CharacterCreateScreen from './src/screens/CharacterCreateScreen/CharacterCreateScreen';
import CharacterSelectScreen from './src/screens/CharacterSelectScreen/CharacterSelectScreen';
import CharacterSkillScreen from './src/screens/CharacterSkillScreen/CharacterSkillScreen';
import CareerPointsScreen from './src/screens/CareerPointsScreen/CareerPointsScreen'; //Maybe don't need
import RockerboyCareerScreen from './src/screens/CareerPointsScreen/RockerboyCareerScreen';
import SkillScreen from './src/screens/CharacterSkillScreen/SkillScreen';
import * as firebase from './src/firebase'; 

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
        <Stack.Screen name="CharacterSkillScreen" component={CharacterSkillScreen}></Stack.Screen>
        <Stack.Screen name="SkillScreen" component={SkillScreen}></Stack.Screen>
        <Stack.Screen name="CareerPointsScreen" component={CareerPointsScreen}></Stack.Screen>
        <Stack.Screen name="RockerboyCareerScreen" component={RockerboyCareerScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


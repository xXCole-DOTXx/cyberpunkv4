import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons} from 'react-native-vector-icons'; //Here is a list of the icons: https://oblador.github.io/react-native-vector-icons/
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CharacterCreateScreen from './src/screens/CharacterCreateScreen/CharacterCreateScreen';
import CharacterSelectScreen from './src/screens/CharacterSelectScreen/CharacterSelectScreen';
import CharacterSkillScreen from './src/screens/CharacterSkillScreen/CharacterSkillScreen';
import CareerPointsScreen from './src/screens/CareerPointsScreen/CareerPointsScreen'; //Maybe don't need
import RockerboyCareerScreen from './src/screens/CareerPointsScreen/RockerboyCareerScreen';
import SoloCareerScreen from './src/screens/CareerPointsScreen/SoloCareerScreen';
import SkillScreen from './src/screens/CharacterSkillScreen/SkillScreen';
import * as firebase from './src/firebase'; 

//This app currently uses stateless function components :: https://stackoverflow.com/questions/57762163/const-vs-class-functions-is-react-native
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

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

  createHomeStack = () =>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
          <Stack.Screen name="CharacterCreate" component={CharacterCreateScreen}></Stack.Screen>
          <Stack.Screen name="CharacterSelect" component={CharacterSelectScreen}></Stack.Screen>
          <Stack.Screen name="CharacterSkillScreen" component={CharacterSkillScreen}></Stack.Screen>
          <Stack.Screen name="SkillScreen" component={SkillScreen}></Stack.Screen>
          <Stack.Screen name="CareerPointsScreen" component={CareerPointsScreen}></Stack.Screen>
          <Stack.Screen name="RockerboyCareerScreen" component={RockerboyCareerScreen}></Stack.Screen>
          <Stack.Screen name="SoloCareerScreen" component={SoloCareerScreen}></Stack.Screen>
        </Stack.Navigator>
  
  createBottomTabs = () => 
  <Tab.Navigator>
      <Tab.Screen name="Home" component={createHomeStack} options={{tabBarIcon : ({color}) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
            }} />
      <Tab.Screen name="Toons" component={CharacterSelectScreen} options={{tabBarIcon : ({color}) => (
          <MaterialCommunityIcons name="account-multiple" color={color} size={26} />
        ),
            }}/>
  </Tab.Navigator>

  return (
    <NavigationContainer initialRouteName ='Home'>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={createHomeStack, createBottomTabs} />
        <Drawer.Screen name="Select a Character" component={CharacterSelectScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons} from 'react-native-vector-icons'; //Here is a list of the icons: https://oblador.github.io/react-native-vector-icons/
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import BackpackScreen from './src/screens/BackpackScreen/BackpackScreen';
import CharacterCreateScreen from './src/screens/CharacterCreateScreen/CharacterCreateScreen';
import CharacterSelectScreen from './src/screens/CharacterSelectScreen/CharacterSelectScreen';
import CharacterSkillScreen from './src/screens/CharacterSkillScreen/CharacterSkillScreen';
import RockerboyCareerScreen from './src/screens/CareerPointsScreen/RockerboyCareerScreen';
import SoloCareerScreen from './src/screens/CareerPointsScreen/SoloCareerScreen';
import NomadCareerScreen from './src/screens/CareerPointsScreen/NomadCareerScreen';
import NetRunnerCareerScreen from './src/screens/CareerPointsScreen/NetRunnerCareerScreen';
import CorpCareerScreen from './src/screens/CareerPointsScreen/CorpCareerScreen';
import TechieCareerScreen from './src/screens/CareerPointsScreen/TechieCareerScreen'
import MedTechCareerScreen from './src/screens/CareerPointsScreen/MedTechCareerScreen'
import MediaCareerScreen from './src/screens/CareerPointsScreen/MediaCareerScreen'
import CopCareerScreen from './src/screens/CareerPointsScreen/CopCareerScreen'
import FixerCareerScreen from './src/screens/CareerPointsScreen/FixerCareerScreen'
import SkillScreen from './src/screens/CharacterSkillScreen/SkillScreen';
import * as firebase from './src/firebase'; 
import { Provider as PaperProvider } from 'react-native-paper';

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
          <Stack.Screen name="SkillSheet" component={SkillScreen}></Stack.Screen>
          <Stack.Screen name="RockerboyCareerScreen" component={RockerboyCareerScreen}></Stack.Screen>
          <Stack.Screen name="SoloCareerScreen" component={SoloCareerScreen}></Stack.Screen>
          <Stack.Screen name="NomadCareerScreen" component={NomadCareerScreen}></Stack.Screen>
          <Stack.Screen name="NetRunnerCareerScreen" component={NetRunnerCareerScreen}></Stack.Screen>
          <Stack.Screen name="CorpCareerScreen" component={CorpCareerScreen}></Stack.Screen>
          <Stack.Screen name="TechieCareerScreen" component={TechieCareerScreen}></Stack.Screen>
          <Stack.Screen name="MedTechCareerScreen" component={MedTechCareerScreen}></Stack.Screen>
          <Stack.Screen name="MediaCareerScreen" component={MediaCareerScreen}></Stack.Screen>
          <Stack.Screen name="CopCareerScreen" component={CopCareerScreen}></Stack.Screen>
          <Stack.Screen name="FixerCareerScreen" component={FixerCareerScreen}></Stack.Screen>
        </Stack.Navigator>

  
    createToonStack = () =>
    <Stack.Navigator>
      <Stack.Screen name="CharacterSelect" component={CharacterSelectScreen}></Stack.Screen>
      <Stack.Screen name="SkillSheet" component={SkillScreen, createToonBottomTabs}></Stack.Screen>
      <Stack.Screen name="BackpackScreen" component={BackpackScreen}></Stack.Screen>
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

createToonBottomTabs = () => 
<Tab.Navigator lazy={true}>
    <Tab.Screen name="Skills" component={SkillScreen} options={{tabBarIcon : ({color}) => (
        <MaterialCommunityIcons name="account-circle" color={color} size={26} />
      ),
          }} />
    <Tab.Screen name="Backpack" component={BackpackScreen} options={{tabBarIcon : ({color}) => (
        <MaterialCommunityIcons name="bag-personal" color={color} size={26} />
      ),
          }}/>
    <Tab.Screen name="info" component={BackpackScreen} options={{tabBarIcon : ({color}) => (
        <MaterialCommunityIcons name="ballot" color={color} size={26} />
      ),
          }}/>
    <Tab.Screen name="guns" component={BackpackScreen} options={{tabBarIcon : ({color}) => (
        <MaterialCommunityIcons name="bullet" color={color} size={26} />
      ),
          }}/>
    <Tab.Screen name="cybernetics" component={BackpackScreen} options={{tabBarIcon : ({color}) => (
        <MaterialCommunityIcons name="robot" color={color} size={26} />
      ),
          }}/>
</Tab.Navigator>

  return (
    <PaperProvider>
      <NavigationContainer initialRouteName ='Home'>
      <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
          <Stack.Screen name="CharacterCreate" component={CharacterCreateScreen}></Stack.Screen>
          <Stack.Screen name="CharacterSelect" component={CharacterSelectScreen}></Stack.Screen>
          <Stack.Screen name="CharacterSkillScreen" component={CharacterSkillScreen}></Stack.Screen>
          <Stack.Screen name="SkillSheet" component={createToonBottomTabs}></Stack.Screen>
          <Stack.Screen name="RockerboyCareerScreen" component={RockerboyCareerScreen}></Stack.Screen>
          <Stack.Screen name="SoloCareerScreen" component={SoloCareerScreen}></Stack.Screen>
          <Stack.Screen name="NomadCareerScreen" component={NomadCareerScreen}></Stack.Screen>
          <Stack.Screen name="NetRunnerCareerScreen" component={NetRunnerCareerScreen}></Stack.Screen>
          <Stack.Screen name="CorpCareerScreen" component={CorpCareerScreen}></Stack.Screen>
          <Stack.Screen name="TechieCareerScreen" component={TechieCareerScreen}></Stack.Screen>
          <Stack.Screen name="MedTechCareerScreen" component={MedTechCareerScreen}></Stack.Screen>
          <Stack.Screen name="MediaCareerScreen" component={MediaCareerScreen}></Stack.Screen>
          <Stack.Screen name="CopCareerScreen" component={CopCareerScreen}></Stack.Screen>
          <Stack.Screen name="FixerCareerScreen" component={FixerCareerScreen}></Stack.Screen>
        </Stack.Navigator>
        {/* <Drawer.Navigator>
          <Drawer.Screen name="Home" component={createHomeStack} />
          <Drawer.Screen name="Select a Character" component={createToonStack} />
        </Drawer.Navigator> */}
      </NavigationContainer>
    </PaperProvider>
  );
}


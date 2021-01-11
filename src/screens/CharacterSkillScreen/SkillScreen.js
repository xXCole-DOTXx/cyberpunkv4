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
     const {
       userName, 
       Role,
       stats: {
          Attr,
          Body,
          Cool,
          Emp,
          Int,
          Luck,
          MA,
          Ref,
          Tech
       },
      Attractivness : {
        Personal_Grooming,
        Wardrobe_Style
      },
      Body : {
        Endurance,
        Strength_Feat,
        Swimming
      },
      Cool : {
        Interrogation,
        Intimidate,
        Oratory,
        Resist_Torture_Drugs,
        Streetwise
      },
      Empathy : {
        Human_Perception,
        Interview,
        Leadership,
        Perform,
        Persuasion_Fast_Talk,
        Seduction,
        Social
      },
      Intelligence : {
        Accounting,
        Anthopology,
        Awareness_Notice,
        Biology,
        Botany,
        Chemistry,
        Composition,
        Diagnose_Illness,
        Education_Gen_Knowledge,
        Expert,
        Gamble,
        Geology,
        Hide_Evade,
        History,
        Language1,
        Language2,
        Language3,
        Library_Search,
        Mathematics,
        Physics,
        Programming,
        Shadow_Track,
        Stock_Market,
        System_Knowledge,
        Teaching,
        Wilderness_Survival,
        Zoology
      },
      Reflex : {
        Archery,
        Athletics,
        Brawling,
        Dance,
        Dodge_Escape,
        Driving,
        Fencing,
        Handgun,
        Heavy_Weapons,
        Martial_Art1,
        Martial_Art2,
        Martial_Art3,
        Melee,
        Motorcycle,
        Operate_Hvy_Machinery,
        Pilot_Dirigible,
        Pilot_Fixed_Wings,
        Pilot_Gyro,
        Pilot_Vect_Thrust_Vehicle,
        Rifle,
        Stealthm,
        Submachinegun
      },
      Spcial_Abilities : {
        Authority,
        Charismatic_Leadership,
        Combat_Sense,
        Credibility,
        Family,
        Interface,
        Jury_Rig,
        Medical_Tech,
        Resources,
        Streetdeal
      },
      Technology : {
        AV_Tech,
        Aero_Tech,
        Basic_Tech,
        Cryotank_Operation,
        CyberTech,
        Cyberdeck_Design,
        Demolitions,
        Disguise,
        Electric_Security,
        Electronics,
        First_Aid,
        Forgery,
        Gyro_Tech,
        Paint_Draw,
        Pharmacuticals,
        Photo_Film,
        Pick_Lock,
        Pick_Pocket,
        Play_Instrument,
        Weaponsmith
      }
    } = player;
     return (
        <ScrollView>
          <View>  
            <Text>{userName}</Text>
            <Text>{Role}</Text>
            <Text>{Int}</Text>
            <Text>Weaponsmith: {Weaponsmith}</Text>
          </View>
        </ScrollView>
      )
  }

}

export default SkillScreen;
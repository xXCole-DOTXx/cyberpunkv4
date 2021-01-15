import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Picker, ScrollView} from 'react-native'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles.js';
import { getCharInfo } from '../../sharedComponents/getCharInfo.js';
import { List } from 'react-native-paper';

// Destructuring objects >> https://dmitripavlutin.com/javascript-object-destructuring/

//NEED TO ADD LUCK AND MA

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
        Stealth,
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
          <Text>You have: {pickPoints} pickup points remaining.</Text>
            <List.Section title={userName + ": " + Role}>

              <List.Accordion
                title="Special Abilities">
                <List.Item title={"Authority: " + Authority} />
                <List.Item title={"Charismatic Leadership: " + Charismatic_Leadership}/>
                <List.Item title={"Combat Sense: " + Combat_Sense} />
                <List.Item title={"Credibility: " + Credibility} />
                <List.Item title={"Family: " + Family} />
                <List.Item title={"Interface: " + Interface} />
                <List.Item title={"Jury Rig: " + Jury_Rig} />
                <List.Item title={"Medical Tech: " + Medical_Tech} />
                <List.Item title={"Resources: " + Resources} />
                <List.Item title={"Streetdeal: " + Streetdeal} />
              </List.Accordion>

              <List.Accordion
                title={"Attractivness: " + Attr}>
                <List.Item title={"Personal Grooming: " + Personal_Grooming}/>
                <List.Item title={"Wardrobe & Style: " + Wardrobe_Style} />
              </List.Accordion>

              <List.Accordion
                title={"Body: " + Body}>
                <List.Item title={"Endurance: " + Endurance}/>
                <List.Item title={"Strength Feat: " + Strength_Feat} />
                <List.Item title={"Swimming: " + Swimming}/>
              </List.Accordion>

              <List.Accordion
                title={"Cool: " + Cool}>
                <List.Item title={"Interrogation: " + Interrogation}/>
                <List.Item title={"Intimidate: " + Intimidate} />
                <List.Item title={"Oratory: " + Oratory}/>
                <List.Item title={"Resist Torture & Drugs: " + Resist_Torture_Drugs}/>
                <List.Item title={"Streetwise: " + Streetwise}/>
              </List.Accordion>

              <List.Accordion
                title={"Empathy: " + Emp}>
                <List.Item title={"Human Perception: " + Human_Perception}/>
                <List.Item title={"Interview: " + Interview} />
                <List.Item title={"Leadership: " + Leadership}/>
                <List.Item title={"Perform: " + Perform}/>
                <List.Item title={"Persuasion & Fast Talk: " + Persuasion_Fast_Talk}/>
                <List.Item title={"Seduction: " + Seduction}/>
                <List.Item title={"Social: " + Social}/>
              </List.Accordion>

              <List.Accordion
                title={"Intelligence: " + Int}>
                <List.Item title={"Accounting: " + Accounting}/>
                <List.Item title={"Anthropology: " + Anthopology} />
                {Role != "Corporate" && <List.Item title={"Awareness/Notice: " + Awareness_Notice}/> }
                <List.Item title={"Biology: " + Biology}/>
                <List.Item title={"Botany: " + Botany}/>
                <List.Item title={"Chemistry: " + Chemistry}/>
                <List.Item title={"Composition: " + Composition}/>
                <List.Item title={"Diagnose Illness: " + Diagnose_Illness}/>
                <List.Item title={"Education & Gen Knowledge: " + Education_Gen_Knowledge}/>
                <List.Item title={"Expert: " + Expert}/>
                <List.Item title={"Gamble: " + Gamble}/>
                <List.Item title={"Geology: " + Geology}/>
                <List.Item title={"Hide/Evade: " + Hide_Evade}/>
                <List.Item title={"History: " + History}/>
                <List.Item title={"Language 1: " + Language1}/>
                <List.Item title={"Language 2: " + Language2}/>
                <List.Item title={"Language 3: " + Language3}/>
                <List.Item title={"Library Search: " + Library_Search}/>
                <List.Item title={"Mathematics: " + Mathematics}/>
                <List.Item title={"Physics: " + Physics}/>
                <List.Item title={"Programming: " + Programming}/>
                <List.Item title={"Shadow/Track: " + Shadow_Track}/>
                <List.Item title={"Stock_Market: " + Mathematics}/>
                <List.Item title={"System Knowledge: " + System_Knowledge}/>
                <List.Item title={"Teaching: " + Teaching}/>
                <List.Item title={"Wilderness Survival: " + Wilderness_Survival}/>
                <List.Item title={"Zoology: " + Zoology}/>
              </List.Accordion>

              <List.Accordion
                title={"Reflex: " + Ref}>
                <List.Item title={"Archery: " + Archery}/>
                <List.Item title={"Athletics: " + Athletics} />
                <List.Item title={"Brawling: " + Brawling}/>
                <List.Item title={"Dance: " + Dance}/>
                <List.Item title={"Dodge/Escape: " + Dodge_Escape}/>
                <List.Item title={"Driving: " + Driving}/>
                <List.Item title={"Fencing: " + Fencing}/>
                <List.Item title={"Handgun: " + Handgun}/>
                <List.Item title={"Heavy Weapons: " + Heavy_Weapons}/>
                <List.Item title={"Martial Art 1: " + Martial_Art1}/>
                <List.Item title={"Martial Art 2: " + Martial_Art2}/>
                <List.Item title={"Martial Art 3: " + Martial_Art3}/>
                <List.Item title={"Melee: " + Melee}/>
                <List.Item title={"Motorcycle: " + Motorcycle}/>
                <List.Item title={"Operate Hvy Machinery: " + Operate_Hvy_Machinery}/>
                <List.Item title={"Pilot Dirigible: " + Pilot_Dirigible}/>
                <List.Item title={"Pilot Fixed Wings: " + Pilot_Fixed_Wings}/>
                <List.Item title={"Pilot Gyro: " + Pilot_Gyro}/>
                <List.Item title={"Pilot Vect Thrust Vehicle: " + Pilot_Vect_Thrust_Vehicle}/>
                <List.Item title={"Rifle: " + Rifle}/>
                <List.Item title={"Stealth: " + Stealth}/>
                <List.Item title={"Submachinegun: " + Submachinegun}/>
              </List.Accordion>

              <List.Accordion
                title={"Technology: " + Tech}>
                <List.Item title={"AV Tech: " + AV_Tech}/>
                <List.Item title={"Aero Tech: " + Aero_Tech} />
                <List.Item title={"Basic Tech: " + Basic_Tech}/>
                <List.Item title={"Cryotank Operation: " + Cryotank_Operation}/>
                <List.Item title={"Cybertech: " + CyberTech}/>
                <List.Item title={"Cyberdeck Design: " + Cyberdeck_Design}/>
                <List.Item title={"Demolitions: " + Demolitions}/>
                <List.Item title={"Disguise: " + Disguise}/>
                <List.Item title={"Electric Security: " + Electric_Security}/>
                <List.Item title={"Electronics: " + Electronics}/>
                <List.Item title={"First Aid: " + First_Aid}/>
                <List.Item title={"Forgery: " + Forgery}/>
                <List.Item title={"Gyro Tech: " + Gyro_Tech}/>
                <List.Item title={"Paint/Draw: " + Paint_Draw}/>
                <List.Item title={"Pharmacuticals: " + Pharmacuticals}/>
                <List.Item title={"Photo/Film: " + Photo_Film}/>
                <List.Item title={"Pick Lock: " + Pick_Lock}/>
                <List.Item title={"Pick Pocket: " + Pick_Pocket}/>
                <List.Item title={"Play Instrument: " + Play_Instrument}/>
                <List.Item title={"Weaponsmith: " + Weaponsmith}/>
              </List.Accordion>

            </List.Section>
          </View>
        </ScrollView>
      )
  }

}

export default CharacterSkillScreen;
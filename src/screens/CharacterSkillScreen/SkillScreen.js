import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Picker, ScrollView} from 'react-native'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles.js';
import { getCharInfo } from '../../sharedComponents/getCharInfo.js';
import { List } from 'react-native-paper';

const SkillScreen = ({navigation, route}) => {
    //Getting params passed from HomeScreen
    const { playerName } = route.params;
    const [player, setPlayer] = useState();

    //This is for controller the expanding and collapsing
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);

     //Using React.useEffect to simulate React's #componentDidMount
     React.useEffect(()=>{
        console.log('Skill Sheet loaded.')
        //Must use an async function to call the userFetch function then set the result equal to characterList
        const asyncFunc = async () => {
          const character = await getCharInfo(playerName);
          setPlayer(character);
        }
        //Call the async function
        asyncFunc();
      },[])

    return (
      <ScrollView>
        <View>            
            <List.Section title={player?.data()?.userName && <Text>{player?.data()?.userName}</Text>}>

              <List.Accordion
                title="Special Abilities">
                <List.Item title={player?.data()?.stats && <Text>Authority: {player?.data()?.Spcial_Abilities.Authority}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Charismatic Leadership: {player?.data()?.Spcial_Abilities.Charismatic_Leadership}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Combat Sense: {player?.data()?.Spcial_Abilities.Combat_Sense}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Credibility: {player?.data()?.Spcial_Abilities.Credibility}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Family: {player?.data()?.Spcial_Abilities.Family}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Interface: {player?.data()?.Spcial_Abilities.Interface}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Jury Rig: {player?.data()?.Spcial_Abilities.Jury_Rig}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Medical Tech: {player?.data()?.Spcial_Abilities.Medical_Tech}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Resources: {player?.data()?.Spcial_Abilities.Resources}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Streetdeal: {player?.data()?.Spcial_Abilities.Streetdeal}</Text>} />
              </List.Accordion>

              <List.Accordion
                title={player?.data()?.stats && <Text>Attractiveness: {player?.data()?.stats.Attr}</Text>}
                onPress={handlePress}>
                <List.Item title={player?.data()?.stats && <Text>Personal Grooming: {player?.data()?.Attractivness.Personal_Grooming}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Wardrobe & Style: {player?.data()?.Attractivness.Wardrobe_Style}</Text>} />
              </List.Accordion>

              <List.Accordion
                title={player?.data()?.stats && <Text>Body: {player?.data()?.stats.Body}</Text>}
                onPress={handlePress}>
                <List.Item title={player?.data()?.stats && <Text>Endurance: {player?.data()?.Body.Endurance}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Strength Feat: {player?.data()?.Body.Strength_Feat}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Swimming: {player?.data()?.Body.Swimming}</Text>} />
              </List.Accordion>

              <List.Accordion
                title={player?.data()?.stats && <Text>Cool: {player?.data()?.stats.Cool}</Text>}
                onPress={handlePress}>
                <List.Item title={player?.data()?.stats && <Text>Interrogation: {player?.data()?.Cool.Interrogation}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Intimidate: {player?.data()?.Cool.Intimidate}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Oratory: {player?.data()?.Cool.Oratory}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Resist Torture & Drugs: {player?.data()?.Cool.Resist_Torture_Drugs}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Streetwise: {player?.data()?.Cool.Streewise}</Text>} />
              </List.Accordion>

              <List.Accordion
                title={player?.data()?.stats && <Text>Empathy: {player?.data()?.stats.Emp}</Text>}
                onPress={handlePress}>
                <List.Item title={player?.data()?.stats && <Text>Human Perception: {player?.data()?.Empathy.Human_Perception}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Interview: {player?.data()?.Empathy.Interview}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Leadership: {player?.data()?.Empathy.Leadership}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Seduction: {player?.data()?.Empathy.Seduction}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Social: {player?.data()?.Empathy.Social}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Persuasion & Fast Talk: {player?.data()?.Empathy.Persuasion_Fast_Talk}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Perform: {player?.data()?.Empathy.Perform}</Text>} />
              </List.Accordion>

              <List.Accordion
                title={player?.data()?.stats && <Text>Intelligence: {player?.data()?.stats.Int}</Text>}
                onPress={handlePress}>
                <List.Item title={player?.data()?.stats && <Text>Accounting: {player?.data()?.Intelligence.Accounting}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Anthropology: {player?.data()?.Intelligence.Anthropology}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Awareness/Notice: {player?.data()?.Intelligence.Awareness_Notice}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Biology: {player?.data()?.Intelligence.Biology}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Botany: {player?.data()?.Intelligence.Botany}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Chemistry: {player?.data()?.Intelligence.Chemistry}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Composition: {player?.data()?.Intelligence.Composition}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Diagnose Illness: {player?.data()?.Intelligence.Diagnose_Illness}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Education & General Knowledge: {player?.data()?.Intelligence.Education_Gen_Knowledge}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Expert: {player?.data()?.Intelligence.Expert}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Gamble: {player?.data()?.Intelligence.Gamble}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Geology: {player?.data()?.Intelligence.Geology}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Hide/Evade: {player?.data()?.Intelligence.Hide_Evade}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>History: {player?.data()?.Intelligence.History}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Language 1: {player?.data()?.Intelligence.Language1}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Language 2: {player?.data()?.Intelligence.Language2}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Language 3: {player?.data()?.Intelligence.Language3}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Library Search: {player?.data()?.Intelligence.Library_Search}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Mathematics: {player?.data()?.Intelligence.Mathematics}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Physics: {player?.data()?.Intelligence.Physics}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Programming: {player?.data()?.Intelligence.Programming}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Shadow/Track: {player?.data()?.Intelligence.Shadow_Track}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Stock Market: {player?.data()?.Intelligence.Stock_Market}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>System Knowledge: {player?.data()?.Intelligence.System_Knowledge}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Teaching: {player?.data()?.Intelligence.Teaching}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Wilderness Survival: {player?.data()?.Intelligence.Wilderness_Survival}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Zoology: {player?.data()?.Intelligence.Zoology}</Text>} />
              </List.Accordion>

              <List.Accordion
                title={player?.data()?.stats && <Text>Reflex: {player?.data()?.stats.Ref}</Text>}
                onPress={handlePress}>
                <List.Item title={player?.data()?.stats && <Text>Archery: {player?.data()?.Reflex.Archery}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Athletics: {player?.data()?.Reflex.Athletics}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Brawling: {player?.data()?.Reflex.Brawling}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Dance: {player?.data()?.Reflex.Dance}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Dodge & Escape: {player?.data()?.Reflex.Escape}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Driving: {player?.data()?.Reflex.Driving}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Fencing: {player?.data()?.Reflex.Fencing}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Handgun: {player?.data()?.Reflex.Handgun}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Heavy Weapons: {player?.data()?.Reflex.Heavy_Weapons}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Martial Art 1: {player?.data()?.Reflex.Martial_Art1}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Martial Art 2: {player?.data()?.Reflex.Martial_Art2}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Martial Art 3: {player?.data()?.Reflex.Martial_Art3}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Melee: {player?.data()?.Reflex.Melee}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Motorcycle: {player?.data()?.Reflex.Motorcycle}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Operate Hvy Machinery: {player?.data()?.Reflex.Operate_Hvy_Machinery}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Pilot (Gyro): {player?.data()?.Reflex.Pilot_Gyro}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Pilot (Fixed Wings): {player?.data()?.Reflex.Pilot_Fixed_Wings}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Pilot (Dirigible): {player?.data()?.Reflex.Pilot_Dirigible}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Pilot (Vect Thrust Vehicle): {player?.data()?.Reflex.Pilot_Vect_Thrust_Vehicle}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Rifle: {player?.data()?.Reflex.rifle}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Stealth: {player?.data()?.Reflex.Stealth}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Submachinegun: {player?.data()?.Reflex.Submachinegun}</Text>} />
              </List.Accordion>

              <List.Accordion
                title={player?.data()?.stats && <Text>Technology: {player?.data()?.stats.Tech}</Text>}
                onPress={handlePress}>
                <List.Item title={player?.data()?.stats && <Text>Aero Tech: {player?.data()?.Technology.Aero_Tech}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>AV Tech: {player?.data()?.Technology.AV_Tech}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Basic Tech: {player?.data()?.Technology.Basic_Tech}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Cryotank Operation: {player?.data()?.Technology.Cryotank_Operation}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Cyberdeck Design: {player?.data()?.Technology.Cybertech_Design}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Cybertech: {player?.data()?.Technology.Cybertech}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Demolitions: {player?.data()?.Technology.Demolitions}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Disguise: {player?.data()?.Technology.Disguise}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Electronics: {player?.data()?.Technology.Electronics}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Elect. Security: {player?.data()?.Technology.Electric_Security}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>First Aid: {player?.data()?.Technology.First_Aid}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Forgery: {player?.data()?.Technology.Forgery}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Gyro Tech: {player?.data()?.Technology.Gyro_Tech}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Paint or Draw: {player?.data()?.Technology.Paint_Draw}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Photo & Film: {player?.data()?.Technology.Photo_Film}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Pharmacuticals: {player?.data()?.Technology.Pharmacuticals}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Pick Lock: {player?.data()?.Technology.Pick_Lock}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Pick Pocket: {player?.data()?.Technology.Pick_Pocket}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Play_Instrument: {player?.data()?.Technology.PlayInstrument}</Text>} />
                <List.Item title={player?.data()?.stats && <Text>Weaponsmith: {player?.data()?.Technology.Weaponsmith}</Text>} />
              </List.Accordion>

            </List.Section>
         
        </View>
      </ScrollView>
    )
}

export default SkillScreen;
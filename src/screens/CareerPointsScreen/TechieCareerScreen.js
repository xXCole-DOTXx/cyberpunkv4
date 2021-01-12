import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Picker, ScrollView} from 'react-native'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles.js';
import { getCharInfo } from '../../sharedComponents/getCharInfo.js';
import { initializeTechie } from '../../firebase/index.js'; 

const TechieCareerScreen = ({navigation, route}) => {
    //Getting params passed from HomeScreen
    const { playerName } = route.params;
    const [player, setPlayer] = useState(); //Examples of using hooks.
    const [skillPoints, setPoints] =useState(40); 
    const [juryRig, setJuryRig] = useState(0);
    const [awareness, setAwareness] = useState(0);
    const [basicTech, setBasicTech] = useState(0);
    const [cyberTech, setCyberTech] = useState(0);
    const [teaching, setTeaching] = useState(0);
    const [education, setEducation] = useState(0);
    const [electronics, setElectronics] = useState(0);
    //NEED TO ADD 3 MORE OPTIONAL TECH SKILLS
  

     //Using React.useEffect to simulate React's #componentDidMount
     React.useEffect(()=>{
        console.log('Career screen loaded.')
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
        <View style={styles.container}>
        {player?.data()?.userName && <Text>{player?.data()?.userName}</Text>}
            <Text>You have {skillPoints} remaining.</Text>

            <View style={styles.item2}>
                {/* Jury Rig buttons */}
                <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && juryRig < 10){
                    setJuryRig(juryRig + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setJuryRig(juryRig);
                    }
                  }}
                  />
                  
                  Jury Rig: {juryRig}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(juryRig > 0){
                    setJuryRig(juryRig - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setJuryRig(juryRig);
                    }
                  }}
                  />
                </Text>

                    {/* Awareness buttons */}
                <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && awareness < 10){
                    setAwareness(awareness + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setAwareness(awareness);
                    }
                  }}
                  />
                  
                  Awareness: {awareness}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(awareness > 0){
                    setAwareness(awareness - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setAwareness(awareness);
                    }
                  }}
                  />
                </Text>

                  {/* Education buttons */}
                  <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && education < 10){
                    setEducation(education + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setEducation(education);
                    }
                  }}
                  />
                  
                  Education: {education}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(education > 0){
                    setEducation(education - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setEducation(education);
                    }
                  }}
                  />
                </Text>

                 {/* Basic Tech buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && basicTech < 10){
                    setBasicTech(basicTech + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setBasicTech(basicTech);
                    }
                  }}
                  />
                  
                  Basic Tech: {basicTech}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(basicTech > 0){
                    setBasicTech(basicTech - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setBasicTech(basicTech);
                    }
                  }}
                  />
                </Text>

                 {/* Cyber Tech buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && cyberTech < 10){
                    setCyberTech(cyberTech + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setCyberTech(cyberTech);
                    }
                  }}
                  />
                  
                  Cyber Tech: {cyberTech}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(cyberTech > 0){
                    setCyberTech(cyberTech - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setCyberTech(cyberTech);
                    }
                  }}
                  />
                </Text>

                 {/* Teaching buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && teaching < 10){
                    setTeaching(teaching + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setTeaching(teaching);
                    }
                  }}
                  />
                  
                  Teaching: {teaching}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(teaching > 0){
                    setTeaching(teaching - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setTeaching(teaching);
                    }
                  }}
                  />
                </Text>

                 {/* Electronics buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && electronics < 10){
                    setElectronics(electronics + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setElectronics(electronics);
                    }
                  }}
                  />
                  
                  Electronics: {electronics}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(electronics > 0){
                    setElectronics(electronics - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setElectronics(electronics);
                    }
                  }}
                  />
                </Text>

            </View>

            <Button
                title="Submit"
                onPress={() => {
                  initializeTechie(playerName, juryRig, awareness, basicTech, education, cyberTech, teaching, electronics);
                  navigation.navigate('CharacterSkillScreen', {
                    playerName: playerName
                  });
            }}
                color="#19AC52"
            />
        </View>
      </ScrollView>
    )
}

export default TechieCareerScreen;
import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Picker, ScrollView} from 'react-native'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles.js';
import { getCharInfo } from '../../sharedComponents/getCharInfo.js';
import { initializeNetRunner } from '../../firebase/index.js'; 

const NetRunnerCareerScreen = ({navigation, route}) => {
    //Getting params passed from HomeScreen
    const { playerName } = route.params;
    const [player, setPlayer] = useState(); //Examples of using hooks.
    const [skillPoints, setPoints] =useState(40); 
    const [netInterface, setNetInterface] = useState(0);
    const [awareness, setAwareness] = useState(0);
    const [basicTech, setBasicTech] = useState(0);
    const [education, setEducation] = useState(0);
    const [system_knowledge, setSystem_Knowledge] = useState(0);
    const [cyberTech, setCyberTech] = useState(0);
    const [cyberDeck_design, setCyberDeck_Design] = useState(0);
    const [composition, setComposition] = useState(0);
    const [electronics, setElectronics] = useState(0);
    const [programming, setProgramming] = useState(0);
  

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
        {player?.userName && <Text>{player?.userName}</Text>}
            <Text>You have {skillPoints} remaining.</Text>

            <View style={styles.item2}>
                {/* netnetInterface buttons */}
                <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && netInterface < 10){
                    setNetInterface(netInterface + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setNetInterface(netInterface);
                    }
                  }}
                  />
                  
                  Interface: {netInterface}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(netInterface > 0){
                    setNetInterface(netInterface - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setNetInterface(netInterface);
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

                 {/* System Knowledge buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && system_knowledge < 10){
                    setSystem_Knowledge(system_knowledge + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setSystem_Knowledge(system_knowledge);
                    }
                  }}
                  />
                  
                  System Knowledge: {system_knowledge}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(system_knowledge > 0){
                    setSystem_Knowledge(system_knowledge - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setSystem_Knowledge(system_knowledge);
                    }
                  }}
                  />
                </Text>

                 {/* CyberTech buttons */}
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

                 {/* CyberDeck Design buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && cyberDeck_design < 10){
                    setCyberDeck_Design(cyberDeck_design + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setCyberDeck_Design(cyberDeck_design);
                    }
                  }}
                  />
                  
                  CyberDeck Design: {cyberDeck_design}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(cyberDeck_design > 0){
                    setCyberDeck_Design(cyberDeck_design - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setCyberDeck_Design(cyberDeck_design);
                    }
                  }}
                  />
                </Text>

                 {/* Composition buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && composition < 10){
                    setComposition(composition + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setComposition(composition);
                    }
                  }}
                  />
                  
                  Composition: {composition}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(composition > 0){
                    setComposition(composition - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setComposition(composition);
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
                    setBasicTech(basicTech+ 1);
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

                 {/* Programming buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && programming < 10){
                    setProgramming(programming + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setProgramming(programming);
                    }
                  }}
                  />
                  
                  Programming: {programming}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(programming > 0){
                    setProgramming(programming - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setProgramming(programming);
                    }
                  }}
                  />
                </Text>

            </View>

            <Button
                title="Submit"
                onPress={() => {
                  initializeNetRunner(playerName, netInterface, awareness, basicTech, education, system_knowledge, cyberTech, cyberDeck_design, composition, electronics, programming);
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

export default NetRunnerCareerScreen;
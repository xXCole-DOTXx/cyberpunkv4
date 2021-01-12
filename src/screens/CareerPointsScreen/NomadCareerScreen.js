import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Picker, ScrollView} from 'react-native'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles.js';
import { getCharInfo } from '../../sharedComponents/getCharInfo.js';
import { initializeNomad } from '../../firebase/index.js'; 

const NomadCareerScreen = ({navigation, route}) => {
    //Getting params passed from HomeScreen
    const { playerName } = route.params;
    const [player, setPlayer] = useState(); //Examples of using hooks.
    const [skillPoints, setPoints] =useState(40); 
    const [family, setFamily] = useState(0);
    const [awareness, setAwareness] = useState(0);
    const [endurance, setEndurance] = useState(0);
    const [melee, setMelee] = useState(0);
    const [rifle, setRifle] = useState(0);
    const [drive, setDrive] = useState(0);
    const [basicTech, setBasicTech] = useState(0);
    const [wildernessSurvival, setWildernessSurvival] = useState(0);
    const [brawling, setBrawling] = useState(0);
    const [athletics, setAthletics] = useState(0);
  

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
                {/* Familybuttons */}
                <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && family < 10){
                    setFamily(family + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setFamily(family);
                    }
                  }}
                  />
                  
                  Family: {family}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(family > 0){
                    setFamily(family - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setFamily(family);
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

                  {/* Endurance buttons */}
                  <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && endurance < 10){
                    setEndurance(endurance + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setEndurance(endurance);
                    }
                  }}
                  />
                  
                  Endurance: {endurance}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(endurance > 0){
                    setEndurance(endurance - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setEndurance(endurance);
                    }
                  }}
                  />
                </Text>

                 {/* Melee buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && melee < 10){
                    setMelee(melee + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setMelee(melee);
                    }
                  }}
                  />
                  
                  Melee: {melee}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(melee > 0){
                    setMelee(melee - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setMelee(melee);
                    }
                  }}
                  />
                </Text>

                 {/* Rifle buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && rifle < 10){
                    setRifle(rifle + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setRifle(rifle);
                    }
                  }}
                  />
                  
                  Rifle: {rifle}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(rifle > 0){
                    setRifle(rifle - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setRifle(rifle);
                    }
                  }}
                  />
                </Text>

                 {/* Brawling buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && brawling < 10){
                    setBrawling(brawling + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setBrawling(brawling);
                    }
                  }}
                  />
                  
                  Brawling: {brawling}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(brawling > 0){
                    setBrawling(brawling - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setBrawling(brawling);
                    }
                  }}
                  />
                </Text>

                 {/* Drive buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && drive < 10){
                    setDrive(drive + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setDrive(drive);
                    }
                  }}
                  />
                  
                  Drive: {drive}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(drive > 0){
                    setDrive(drive - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setDrive(drive);
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

                 {/* Wilderness Survival buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && wildernessSurvival < 10){
                    setWildernessSurvival(wildernessSurvival + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setWildernessSurvival(wildernessSurvival);
                    }
                  }}
                  />
                  
                  Wilderness Survival: {wildernessSurvival}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(wildernessSurvival > 0){
                    setWildernessSurvival(wildernessSurvival - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setWildernessSurvival(wildernessSurvival);
                    }
                  }}
                  />
                </Text>

                 {/* Athletics buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && athletics < 10){
                    setAthletics(athletics + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setAthletics(athletics);
                    }
                  }}
                  />
                  
                  Athletics: {athletics}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(athletics > 0){
                    setAthletics(athletics - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setAthletics(athletics);
                    }
                  }}
                  />
                </Text>

            </View>

            <Button
                title="Submit"
                onPress={() => {
                  initializeNomad(playerName, family, awareness, endurance, melee, rifle, drive, basicTech, wildernessSurvival, brawling, athletics);
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

export default NomadCareerScreen;
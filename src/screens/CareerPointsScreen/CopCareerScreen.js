import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Picker, ScrollView} from 'react-native'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles.js';
import { getCharInfo } from '../../sharedComponents/getCharInfo.js';
import { initializeCop } from '../../firebase/index.js'; 

const CopCareerScreen = ({navigation, route}) => {
    //Getting params passed from HomeScreen
    const { playerName } = route.params;
    const { pickupPoints } = route.params;
    const [player, setPlayer] = useState(); //Examples of using hooks.
    const [skillPoints, setPoints] =useState(40); 
    const [authority, setAuthority] = useState(0);
    const [awareness, setAwareness] = useState(0);
    const [humanPerception, setHumanPerception] = useState(0);
    const [education, setEducation] = useState(0);
    const [athletics, setAthletics] = useState(0);
    const [brawling, setBrawling] = useState(0);
    const [melee, setMelee] = useState(0);
    const [streetwise, setStreetwise] = useState(0);
    const [handgun, setHandgun] = useState(0);
    const [interrogation, setInterogation] = useState(0);
  

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
                {/* Authority buttons */}
                <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && authority < 10){
                    setAuthority(authority + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setAuthority(authority);
                    }
                  }}
                  />
                  
                  Authority: {authority}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(authority > 0){
                    setAuthority(authority - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setAuthority(authority);
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

                 {/* Human Perception buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && humanPerception < 10){
                    setHumanPerception(humanPerception + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setHumanPerception(humanPerception);
                    }
                  }}
                  />
                  
                  Human Perception: {humanPerception}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(humanPerception > 0){
                    setHumanPerception(humanPerception - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setHumanPerception(humanPerception);
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
                    if(brawling> 0){
                    setBrawling(brawling - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setBrawling(brawling);
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
                    melee(melee - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setMelee(melee);
                    }
                  }}
                  />
                </Text>


                 {/* Streetwise buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && streetwise < 10){
                    setStreetwise(streetwise + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setStreetwise(streetwise);
                    }
                  }}
                  />
                  
                  Streetwise: {streetwise}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(streetwise > 0){
                    setStreetwise(streetwise - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setStreetwise(streetwise);
                    }
                  }}
                  />
                </Text>

                 {/* Handgun buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && handgun < 10){
                    setHandgun(handgun + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setHandgun(handgun);
                    }
                  }}
                  />
                  
                  Handgun: {handgun}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(handgun > 0){
                    setHandgun(handgun - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setHandgun(handgun);
                    }
                  }}
                  />
                </Text>

                 {/* Interogation buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && interrogation < 10){
                    setInterogation(interrogation + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setInterogation(interrogation);
                    }
                  }}
                  />
                  
                  Interogation: {interrogation}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(interrogation > 0){
                    setInterogation(interrogation - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setInterogation(interrogation);
                    }
                  }}
                  />
                </Text>

            </View>

            <Button
                title="Submit"
                onPress={() => {
                  initializeCop(playerName, authority, awareness, humanPerception, education, handgun, athletics, brawling, streetwise, melee, interrogation);
                  navigation.navigate('CharacterSkillScreen', {
                    playerName: playerName,
                    pickupPoints: pickupPoints
                  });
            }}
                color="#19AC52"
            />
        </View>
      </ScrollView>
    )
}

export default CopCareerScreen;
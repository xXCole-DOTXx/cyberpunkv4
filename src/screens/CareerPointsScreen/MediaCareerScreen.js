import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Picker, ScrollView} from 'react-native'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles.js';
import { getCharInfo } from '../../sharedComponents/getCharInfo.js';
import { initializeMedia } from '../../firebase/index.js'; 

const MediaCareerScreen = ({navigation, route}) => {
    //Getting params passed from HomeScreen
    const { playerName } = route.params;
    const { pickupPoints } = route.params;
    const [player, setPlayer] = useState(); //Examples of using hooks.
    const [skillPoints, setPoints] =useState(40); 
    const [credibility, setCredibility] = useState(0);
    const [awareness, setAwareness] = useState(0);
    const [humanPerception, setHumanPerception] = useState(0);
    const [education, setEducation] = useState(0);
    const [composition, setComposition] = useState(0);
    const [socail, setSocial] = useState(0);
    const [persuasion, setPersuasion] = useState(0);
    const [streetwise, setStreetwise] = useState(0);
    const [photo, setPhoto] = useState(0);
    const [interview, setInterview] = useState(0);
  

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
                {/* Credibility buttons */}
                <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && credibility < 10){
                    setCredibility(credibility + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setCredibility(credibility);
                    }
                  }}
                  />
                  
                  Credibility: {credibility}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(credibility > 0){
                    setCredibility(credibility - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setCredibility(credibility);
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

                 {/* Socail buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && socail < 10){
                    setSocial(socail + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setSocial(socail);
                    }
                  }}
                  />
                  
                  Socail: {socail}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(socail > 0){
                    setSocial(socail - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setSocial(socail);
                    }
                  }}
                  />
                </Text>

                 {/* Persuasion buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && persuasion < 10){
                    setPersuasion(persuasion + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setPersuasion(persuasion);
                    }
                  }}
                  />
                  
                  Persuasion & Fast Talk: {persuasion}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(persuasion > 0){
                    setPersuasion(persuasion - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setPersuasion(persuasion);
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

                 {/* Photo buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && photo < 10){
                    setPhoto(photo + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setPhoto(photo);
                    }
                  }}
                  />
                  
                  Photo & Film: {photo}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(photo > 0){
                    setPhoto(photo - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setPhoto(photo);
                    }
                  }}
                  />
                </Text>

                 {/* Interview buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && interview < 10){
                    setInterview(interview + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setInterview(interview);
                    }
                  }}
                  />
                  
                  Interview: {interview}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(interview > 0){
                    setInterview(interview - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setInterview(interview);
                    }
                  }}
                  />
                </Text>

            </View>

            <Button
                title="Submit"
                onPress={() => {
                  initializeMedia(playerName, credibility, awareness, humanPerception, education, composition, socail, persuasion, streetwise, photo, interview);
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

export default MediaCareerScreen;
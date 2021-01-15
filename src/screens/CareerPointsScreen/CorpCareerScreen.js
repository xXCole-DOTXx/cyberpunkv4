import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Picker, ScrollView} from 'react-native'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles.js';
import { getCharInfo } from '../../sharedComponents/getCharInfo.js';
import { initializeCorp } from '../../firebase/index.js'; 

const CorpCareerScreen = ({navigation, route}) => {
    //Getting params passed from HomeScreen
    const { playerName } = route.params;
    const { pickupPoints } = route.params;
    const [player, setPlayer] = useState(); //Examples of using hooks.
    const [skillPoints, setPoints] =useState(40); 
    const [resources, setResources] = useState(0);
    const [awareness, setAwareness] = useState(0);
    const [humanPerception, setHumanPerception] = useState(0);
    const [education, setEducation] = useState(0);
    const [librarySearch, setLibrarySearch] = useState(0);
    const [socail, setSocial] = useState(0);
    const [persuasion, setPersuasion] = useState(0);
    const [stockMarket, setStockMarket] = useState(0);
    const [wardrobe_style, setWardrobe_Style] = useState(0);
    const [personalGrooming, setPersonalGrooming] = useState(0);
  

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
                {/* Resources buttons */}
                <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && resources < 10){
                    setResources(resources + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setResources(resources);
                    }
                  }}
                  />
                  
                  Resources: {resources}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(resources > 0){
                    setResources(resources - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setResources(resources);
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

                 {/* Library Search buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && librarySearch < 10){
                    setLibrarySearch(librarySearch + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setLibrarySearch(librarySearch);
                    }
                  }}
                  />
                  
                  Library Search: {librarySearch}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(librarySearch > 0){
                    setLibrarySearch(librarySearch - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setLibrarySearch(librarySearch);
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


                 {/* Stock Market buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && stockMarket < 10){
                    setStockMarket(stockMarket + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setStockMarket(stockMarket);
                    }
                  }}
                  />
                  
                  Stock Market: {stockMarket}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(stockMarket > 0){
                    setStockMarket(stockMarket - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setStockMarket(stockMarket);
                    }
                  }}
                  />
                </Text>

                 {/* Wardrobe buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && wardrobe_style < 10){
                    setWardrobe_Style(wardrobe_style + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setWardrobe_Style(wardrobe_style);
                    }
                  }}
                  />
                  
                  Wardrobe & Style: {wardrobe_style}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(wardrobe_style > 0){
                    setWardrobe_Style(wardrobe_style - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setWardrobe_Style(wardrobe_style);
                    }
                  }}
                  />
                </Text>

                 {/* Personal Grooming buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && personalGrooming < 10){
                    setPersonalGrooming(personalGrooming + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setPersonalGrooming(personalGrooming);
                    }
                  }}
                  />
                  
                  Personal Grooming: {personalGrooming}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(personalGrooming > 0){
                    setPersonalGrooming(personalGrooming - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setPersonalGrooming(personalGrooming);
                    }
                  }}
                  />
                </Text>

            </View>

            <Button
                title="Submit"
                onPress={() => {
                  initializeCorp(playerName, resources, awareness, humanPerception, education, librarySearch, socail, persuasion, stockMarket, wardrobe_style, personalGrooming);
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

export default CorpCareerScreen;
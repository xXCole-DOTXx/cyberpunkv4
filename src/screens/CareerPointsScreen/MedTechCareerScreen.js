import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Picker, ScrollView} from 'react-native'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles.js';
import { getCharInfo } from '../../sharedComponents/getCharInfo.js';
import { initializeMedTech } from '../../firebase/index.js'; 

const MedTechCareerScreen = ({navigation, route}) => {
    //Getting params passed from HomeScreen
    const { playerName } = route.params;
    const { pickupPoints } = route.params;
    const [player, setPlayer] = useState(); //Examples of using hooks.
    const [skillPoints, setPoints] =useState(40); 
    const [medicalTech, setMedicalTech] = useState(0);
    const [awareness, setAwareness] = useState(0);
    const [basicTech, setBasicTech] = useState(0);
    const [diagnose, setDiagnose] = useState(0);
    const [education, setEducation] = useState(0);
    const [cyrotankOperation, setCryotankOperation] = useState(0);
    const [librarySearch, setLibrarySearch] = useState(0);
    const [pharmaceuticals, setPharmaceuticals] = useState(0);
    const [zoology, setZoology] = useState(0);
    const [humanPerception, setHumanPerception] = useState(0);
  

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
                {/* Medical Tech buttons */}
                <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && medicalTech < 10){
                    setMedicalTech(medicalTech + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setMedicalTech(medicalTech);
                    }
                  }}
                  />
                  
                  Medical Tech: {medicalTech}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(medicalTech > 0){
                    setMedicalTech(medicalTech - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setMedicalTech(medicalTech);
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

                 {/* Diagnose buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && diagnose < 10){
                    setDiagnose(diagnose + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setDiagnose(diagnose);
                    }
                  }}
                  />
                  
                  Diagnose: {diagnose}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(diagnose > 0){
                    setDiagnose(diagnose - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setDiagnose(diagnose);
                    }
                  }}
                  />
                </Text>


                 {/* Cryotank Operation buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && cyrotankOperation < 10){
                    setCryotankOperation(cyrotankOperation + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setCryotankOperation(cyrotankOperation);
                    }
                  }}
                  />
                  
                  Cryotank Operation: {cyrotankOperation}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(cyrotankOperation > 0){
                    setCryotankOperation(cyrotankOperation - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setCryotankOperation(cyrotankOperation);
                    }
                  }}
                  />
                </Text>

                 {/* Pharmacuticals buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && pharmaceuticals < 10){
                    setPharmaceuticals(pharmaceuticals + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setPharmaceuticals(pharmaceuticals);
                    }
                  }}
                  />
                  
                  Pharmacuticals: {pharmaceuticals}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(pharmaceuticals > 0){
                    setPharmaceuticals(pharmaceuticals - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setPharmaceuticals(pharmaceuticals);
                    }
                  }}
                  />
                </Text>

                 {/* Zoology buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && zoology < 10){
                    setZoology(zoology + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setZoology(zoology);
                    }
                  }}
                  />
                  
                  Zoology: {zoology}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(zoology > 0){
                    setZoology(zoology - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setZoology(zoology);
                    }
                  }}
                  />
                </Text>

            </View>

            <Button
                title="Submit"
                onPress={() => {
                    initializeMedTech(playerName, medicalTech, awareness, humanPerception, education, librarySearch, diagnose, cyrotankOperation, basicTech, zoology, pharmaceuticals);
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

export default MedTechCareerScreen;
import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Picker, ScrollView} from 'react-native'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles.js';
import { getCharInfo } from '../../sharedComponents/getCharInfo.js';
import { initializeRockerboy } from '../../firebase/index.js';

const RockerboyCareerScreen = ({navigation, route}) => {
    //Getting params passed from HomeScreen
    const { playerName } = route.params;
    const [player, setPlayer] = useState(); //Examples of using hooks.
    const [skillPoints, setPoints] =useState(40); 
    const [leadership, setLeadership] = useState(0);
    const [awareness, setAwareness] = useState(0);
    const [perform, setPerform] = useState(0);
    const [style, setStyle] = useState(0);
    const [composition, setComposition] = useState(0);
    const [brawling, setBrawling] = useState(0);
    const [playInstrument, setPlayInstrument] = useState(0);
    const [streetwise, setStreetWise] = useState(0);
    const [persuasion, setPersuasion] = useState(0);
    const [seduction, setSeduction] = useState(0);
  

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
                {/* Leadership buttons */}
                <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && leadership < 10){
                    setLeadership(leadership + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setLeadership(leadership);
                    }
                  }}
                  />
                  
                  Charismatic Leadership: {leadership}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(leadership > 0){
                    setLeadership(leadership - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setLeadership(leadership);
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

                  {/* Perform buttons */}
                  <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && perform < 10){
                    setPerform(perform + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setPerform(perform);
                    }
                  }}
                  />
                  
                  Perform: {perform}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(perform > 0){
                    setPerform(perform - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setPerform(perform);
                    }
                  }}
                  />
                </Text>

                 {/* Style buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && style < 10){
                    setStyle(style + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setStyle(style);
                    }
                  }}
                  />
                  
                  Style: {style}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(style > 0){
                    setStyle(style - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setStyle(style);
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

                 {/* Play Instrument buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && playInstrument < 10){
                    setPlayInstrument(playInstrument + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setPlayInstrument(playInstrument);
                    }
                  }}
                  />
                  
                  Play Instrument: {playInstrument}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(playInstrument > 0){
                    setPlayInstrument(playInstrument - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setPlayInstrument(playInstrument);
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
                    setStreetWise(streetwise + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setStreetWise(streetwise);
                    }
                  }}
                  />
                  
                  Streetwise: {streetwise}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(streetwise > 0){
                    setStreetWise(streetwise - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setStreetWise(streetwise);
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
                  
                  Persuasion: {persuasion}
                
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

                 {/* Seduction buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && seduction < 10){
                    setSeduction(seduction + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setSeduction(seduction);
                    }
                  }}
                  />
                  
                  Seduction: {seduction}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(seduction > 0){
                    setSeduction(seduction - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setSeduction(seduction);
                    }
                  }}
                  />
                </Text>

            </View>

            <Button
                title="Submit"
                onPress={() => {
                  initializeRockerboy(playerName, leadership, awareness, perform, style, composition, brawling, playInstrument, streetwise, persuasion, seduction);
                  navigation.navigate('SkillSheet', {
                    playerName: playerName
                  });
            }}
                color="#19AC52"
            />
        </View>
      </ScrollView>
    )
}

export default RockerboyCareerScreen;
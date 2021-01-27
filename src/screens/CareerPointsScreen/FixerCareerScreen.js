import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Picker, ScrollView} from 'react-native'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles.js';
import { getCharInfo } from '../../sharedComponents/getCharInfo.js';
import { initializeFixer } from '../../firebase/index.js'; 

const CopCareerScreen = ({navigation, route}) => {
    //Getting params passed from HomeScreen
    const { playerName } = route.params;
    const { pickupPoints } = route.params;
    const [player, setPlayer] = useState(); //Examples of using hooks.
    const [skillPoints, setPoints] =useState(40); 
    const [streetdeal, setStreetdeal] = useState(0);
    const [awareness, setAwareness] = useState(0);
    const [forgery, setForgery] = useState(0);
    const [intimidate, setIntimidate] = useState(0);
    const [pickLock, setPickLock] = useState(0);
    const [brawling, setBrawling] = useState(0);
    const [melee, setMelee] = useState(0);
    const [pickPocket, setPickPocket] = useState(0);
    const [handgun, setHandgun] = useState(0);
    const [persuasion, setPersuasion] = useState(0);
  

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
                {/* Streetdeal buttons */}
                <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && streetdeal < 10){
                    setStreetdeal(streetdeal + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setStreetdeal(streetdeal);
                    }
                  }}
                  />
                  
                  Streetdeal: {streetdeal}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(streetdeal > 0){
                    setStreetdeal(streetdeal - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setStreetdeal(streetdeal);
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

                  {/* Forgery buttons */}
                  <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && forgery < 10){
                    setForgery(forgery + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setForgery(forgery);
                    }
                  }}
                  />
                  
                  Forgery: {forgery}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(forgery > 0){
                    setForgery(forgery - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setForgery(forgery);
                    }
                  }}
                  />
                </Text>

                 {/* Pick Lock buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && pickLock < 10){
                    setPickLock(pickLock + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setPickLock(pickLock);
                    }
                  }}
                  />
                  
                  Pick Lock: {pickLock}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(pickLock > 0){
                    setPickLock(pickLock - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setPickLock(pickLock);
                    }
                  }}
                  />
                </Text>

                 {/* Pick Pocket buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && pickPocket < 10){
                    setPickPocket(pickPocket + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setPickPocket(pickPocket);
                    }
                  }}
                  />
                  
                  Pick Pocket: {pickPocket}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(pickPocket > 0){
                    setPickPocket(pickPocket - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setPickPocket(pickPocket);
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


                 {/* Intimidate buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && intimidate < 10){
                    setIntimidate(intimidate + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setIntimidate(intimidate);
                    }
                  }}
                  />
                  
                  Intimidate: {intimidate}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(intimidate > 0){
                    setIntimidate(intimidate - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setIntimidate(intimidate);
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

            </View>

            <Button
                title="Submit"
                onPress={() => {
                  initializeFixer(playerName, streetdeal, awareness, forgery, pickLock, handgun, intimidate, brawling, pickPocket, melee, persuasion);
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
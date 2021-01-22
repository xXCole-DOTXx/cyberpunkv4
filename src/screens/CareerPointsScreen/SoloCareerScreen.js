import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Picker, ScrollView} from 'react-native'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles.js';
import { getCharInfo } from '../../sharedComponents/getCharInfo.js';
import { initializeSolo } from '../../firebase/index.js';

const SoloCareerScreen = ({navigation, route}) => {
    //Getting params passed from HomeScreen
    const { playerName } = route.params;
    const { pickupPoints } = route.params;
    const [player, setPlayer] = useState(); //Examples of using hooks.
    const [skillPoints, setPoints] =useState(40); 
    const [combat_Sense, setCombat_Sense] =useState(0);
    const [awareness_Notice, setAwareness_Notice] =useState(0);  
    const [handgun, setHandgun] =useState(0); 
    const [brawling, setBrawling] =useState(0);
    const [melee, setMelee] =useState(0);
    const [weapons_Tech, setWeapons_Tech] =useState(0);
    const [rifle, setRifle] =useState(0);
    const [athletics, setAthletics] =useState(0);
    const [submachinegun, setSubmachinegun] =useState(0);
    const [stealth, setStealth] =useState(0);

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
                {/* Combat Sense buttons */}
                <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && combat_Sense < 10){
                    setCombat_Sense(combat_Sense + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setCombat_Sense(combat_Sense);
                    }
                  }}
                  />
                  
                  Combat Sense: {combat_Sense}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(combat_Sense > 0){
                    setCombat_Sense(combat_Sense - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setCombat_Sense(combat_Sense);
                    }
                  }}
                  />
                </Text>

                    {/* Awareness buttons */}
                <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && awareness_Notice < 10){
                    setAwareness_Notice(awareness_Notice + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setAwareness_Notice(awareness_Notice);
                    }
                  }}
                  />
                  
                  Awareness/Notice: {awareness_Notice}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(awareness_Notice > 0){
                    setAwareness_Notice(awareness_Notice - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setAwareness_Notice(awareness_Notice);
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

                 {/* Weapons Tech buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && weapons_Tech < 10){
                    setWeapons_Tech(weapons_Tech + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setWeapons_Tech(weapons_Tech);
                    }
                  }}
                  />
                  
                  Weapons Tech: {weapons_Tech}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(weapons_Tech > 0){
                    setWeapons_Tech(weapons_Tech - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setWeapons_Tech(weapons_Tech);
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
                    if(streetwise > 0){
                    setAthletics(athletics - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setAthletics(athletics);
                    }
                  }}
                  />
                </Text>

                 {/* Submachinegun buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && submachinegun < 10){
                    setSubmachinegun(submachinegun + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setSubmachinegun(submachinegun);
                    }
                  }}
                  />
                  
                  Submachinegun: {submachinegun}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(submachinegun > 0){
                    setSubmachinegun(submachinegun - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setSubmachinegun(submachinegun);
                    }
                  }}
                  />
                </Text>

                 {/* Stealth buttons */}
                 <Text style={{margin: 5}}>
                  <Button 
                      title="+"
                              onPress={() => {
                    if(skillPoints > 0 && stealth < 10){
                    setStealth(stealth + 1);
                    setPoints(skillPoints - 1);
                    }
                    else{
                      setStealth(stealth);
                    }
                  }}
                  />
                  
                  Stealth: {stealth}
                
                  <Button 
                      title="-"
                              onPress={() => {
                    if(stealth > 0){
                    setStealth(stealth - 1);
                    setPoints(skillPoints + 1);
                    }
                    else{
                      setStealth(stealth);
                    }
                  }}
                  />
                </Text>

            </View>
            

            <Button
                title="Submit"
                        onPress={() => {
                              initializeSolo(playerName, combat_Sense, awareness_Notice, handgun, brawling, melee, weapons_Tech, rifle, athletics, submachinegun, stealth);
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

export default SoloCareerScreen;
import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Picker, ScrollView} from 'react-native'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import * as firebase from '../../firebase'; 

const CharacterCreateScreen = ({navigation, route}) =>{

    //Getting params passed from HomeScreen
    const { playerPoints } = route.params;

    // React.useEffect(()=>{
    //     console.log('Character Screen loaded.')
    //     //Initialize connection with database
    //     userInit();
    //   },[])

      const [charName, setName] = useState("Player1");
      const [selectedValue, setSelectedValue] = useState("Rockerboy");

      //Use useState to change the amount of points when a user uses the buttons
        const [skillPoints, setPoints] =useState(playerPoints);
        const [charInt, setInt] = useState(0);
        const [charRef, setRef] = useState(0);
        const [charTech, setTech] = useState(0);
        const [charCool, setCool] = useState(0);
        const [charAttr, setAttr] = useState(0);
        const [charLuck, setLuck] = useState(0);
        const [charMa, setMa] = useState(0);
        const [charBody, setBody] = useState(0);
        const [charEmp, setEmp] = useState(0);

      const userInit = async (selectedName, selectedRole) => {
          try{
              await firebase.init();

              //Construct a user obj
              const user = {
                  Role: selectedRole,
                  userName: selectedName
              }
              await firebase.createUser(user);

            //   const users = await firebase.getAllUsers();
            //   console.log(users);

          } catch (error) {
              console.log(error);
          }
      }


    return (
      <ScrollView>
        <View style={styles.container}>
            <Text>Character Screen</Text>
            <Text>You have {skillPoints} remaining.</Text>
            <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 5 }}
            placeholder="Name"
            onChangeText={(val) => setName(val)}
            />

            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5, padding: 10}}>
                    <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                    <Picker.Item label="Rockerboy" value="Rockerboy" />
                    <Picker.Item label="Solo" value="Solo" />
                    <Picker.Item label="NetRunner" value="NetRunner" />
                    <Picker.Item label="Techie" value="Techie" />
                    <Picker.Item label="Medtech" value="Medtech" />
                    <Picker.Item label="Media" value="Media" />
                    <Picker.Item label="Cop" value="Cop" />
                    <Picker.Item label="Corporate" value="Corporate" />
                    <Picker.Item label="Fixer" value="Fixer" />
                    <Picker.Item label="Nomad" value="Nomad" />
                    
                    </Picker>
                </View>
                
      <View style={{flexDirection: 'col', justifyContent: 'space-between', margin: 5}}>
        {/* Int buttons */}
        <Text style={{margin: 5}}>
          <Button 
              title="+"
                      onPress={() => {
            if(skillPoints > 0 && charInt < 10){
            setInt(charInt + 1);
            setPoints(skillPoints - 1);
            }
            else{
              setInt(charInt);
            }
          }}
          />
          
          Int: {charInt}
        
          <Button 
              title="-"
                      onPress={() => {
            if(charInt > 0){
            setInt(charInt - 1);
            setPoints(skillPoints + 1);
            }
            else{
              setInt(charInt);
            }
          }}
          />
        </Text>

        {/* Ref buttons */}
      <Text style={{margin: 5}}>
        <Button 
            title="+"
                    onPress={() => {
          if(skillPoints > 0 && charRef < 10){
          setRef(charRef + 1);
          setPoints(skillPoints - 1);
          }
          else{
            setRef(charRef);
          }
        }}
        />
        
        Ref: {charRef}
      
        <Button 
            title="-"
                    onPress={() => {
          if(charRef > 0){
          setRef(charRef - 1);
          setPoints(skillPoints + 1);
          }
          else{
            setRef(charRef);
          }
        }}
        />
      </Text>

      {/* Tech buttons */}
      <Text style={{margin: 5}}>
        <Button 
            title="+"
                    onPress={() => {
          if(skillPoints > 0 && charTech < 10){
          setTech(charTech + 1);
          setPoints(skillPoints - 1);
          }
          else{
            setTech(charTech);
          }
        }}
        />
        
        Tech: {charTech}
      
        <Button 
            title="-"
                    onPress={() => {
          if(charTech > 0){
          setTech(charTech - 1);
          setPoints(skillPoints + 1);
          }
          else{
            setTech(charTech);
          }
        }}
        />
      </Text>

      {/* Cool buttons */}
      <Text style={{margin: 5}}>
        <Button 
            title="+"
                    onPress={() => {
          if(skillPoints > 0 && charCool < 10){
          setCool(charCool + 1);
          setPoints(skillPoints - 1);
          }
          else{
            setCool(charCool);
          }
        }}
        />
        
        Cool: {charCool}
      
        <Button 
            title="-"
                    onPress={() => {
          if(charCool > 0){
          setCool(charCool - 1);
          setPoints(skillPoints + 1);
          }
          else{
            setCool(charCool);
          }
        }}
        />
      </Text>

      {/* Attr buttons */}
      <Text style={{margin: 5}}>
        <Button 
            title="+"
                    onPress={() => {
          if(skillPoints > 0 && charAttr < 10){
          setAttr(charAttr + 1);
          setPoints(skillPoints -1 );
          }
          else{
            setAttr(charAttr);
          }
        }}
        />
        
        Attr: {charAttr}
      
        <Button 
            title="-"
                    onPress={() => {
          if(charAttr > 0){
          setAttr(charAttr - 1);
          setPoints(skillPoints + 1);
          }
          else{
            setAttr(charAttr);
          }
        }}
        />
      </Text>

      {/* Luck buttons */}
      <Text style={{margin: 5}}>
        <Button 
            title="+"
                    onPress={() => {
          if(skillPoints > 0 && charLuck < 10){
          setLuck(charLuck + 1);
          setPoints(skillPoints - 1);
          }
          else{
            setLuck(charLuck);
          }
        }}
        />
        
        Luck: {charLuck}
      
        <Button 
            title="-"
                    onPress={() => {
          if(charLuck > 0){
          setLuck(charLuck - 1);
          setPoints(skillPoints + 1);
          }
          else{
            setLuck(charLuck);
          }
        }}
        />
      </Text>

      {/* MA buttons */}
      <Text style={{margin: 5}}>
        <Button 
            title="+"
                    onPress={() => {
          if(skillPoints > 0 && charMa < 10){
          setMa(charMa + 1);
          setPoints(skillPoints - 1);
          }
          else{
            setMa(charMa);
          }
        }}
        />
        
        MA: {charMa}
      
        <Button 
            title="-"
                    onPress={() => {
          if(charMa > 0){
          setMa(charMa - 1);
          setPoints(skillPoints + 1);
          }
          else{
            setMa(charMa);
          }
        }}
        />
      </Text>

       {/* Body buttons */}
       <Text style={{margin: 5}}>
        <Button 
            title="+"
                    onPress={() => {
          if(skillPoints > 0){
          setBody(charBody + 1 && charBody < 10);
          setPoints(skillPoints - 1);
          }
          else{
            setBody(charBody);
          }
        }}
        />
        
        Body: {charBody}
      
        <Button 
            title="-"
                    onPress={() => {
          if(charBody > 0){
          setBody(charBody - 1);
          setPoints(skillPoints + 1);
          }
          else{
            setBody(charBody);
          }
        }}
        />
      </Text>

      {/* Emp buttons */}
      <Text style={{margin: 5}}>
        <Button 
            title="+"
                    onPress={() => {
          if(skillPoints > 0 && charEmp < 10){
          setEmp(charEmp + 1);
          setPoints(skillPoints - 1);
          }
          else{
            setEmp(charEmp);
          }
        }}
        />
        
        Emp: {charEmp}
      
        <Button 
            title="-"
                    onPress={() => {
          if(charEmp > 0){
          setEmp(charEmp - 1);
          setPoints(skillPoints + 1);
          }
          else{
            setEmp(charEmp);
          }
        }}
        />
      </Text>


      </View>

            <Button
                title="Submit"
                        onPress={() => {
                            userInit(charName, selectedValue);
                        }}
            />

        </View>
    </ScrollView>
    )
}

//Character Creation stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10
  },
});


export default CharacterCreateScreen;
import React, {useState} from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { Text, View, TextInput, Button, Image, StyleSheet, TouchableOpacity, Picker} from 'react-native'
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
        <View style={styles.container}>
            <Text>Character Screen</Text>

            <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 5 }}
            placeholder="Name"
            onChangeText={(val) => setName(val)}
            />

            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>
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

                

            <Button
                title="Submit"
                        onPress={() => {
                            userInit(charName, selectedValue);
                        }}
            />

        </View>
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
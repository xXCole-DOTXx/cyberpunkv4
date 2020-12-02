import React, {useState} from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { Text, View, TextInput, Button, Image, StyleSheet, TouchableOpacity, Picker} from 'react-native'
import * as firebase from '../../firebase'; 

const CharacterCreateScreen = ({navigation, route}) =>{

    // React.useEffect(()=>{
    //     console.log('Character Screen loaded.')
    //     //Initialize connection with database
    //     userInit();
    //   },[])

      const [charName, setName] = useState("Player1");
      const [selectedValue, setSelectedValue] = useState("Rockerboy");

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
        <View>
            <Text>Character Screen</Text>

            <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 5}}
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


export default CharacterCreateScreen;
import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


let skillPoints = characterRoll();
const HomeScreen = ({navigation, route}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Create a character"
          onPress={() => navigation.navigate('CharacterCreate',{
            playerPoints: skillPoints
          })}
          color="#19AC52"
        />

        <Button
          title="Select a character"
          onPress={() => navigation.navigate('CharacterSelect')}
          color="#19AC52"
        />
      </View>
    )
}

function characterRoll(){
  var rolls = [];
  for(var i = 0; i<9; i++){
    rolls.push(Math.floor(Math.random() * 10) + 2); //Between 2-10 because if you get a 1 you have to reroll
  }
  var sum = rolls.reduce(function(a,b){
    return a+b;
  }, 0);
  return sum;
}

export default HomeScreen;
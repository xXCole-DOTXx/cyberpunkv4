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
      </View>
    )
}


function D6(){
  alert(Math.floor(Math.random() * 6) + 1);  // returns a random integer from 1 to 10
  return 0;
}

function percentRoll(){
  alert(Math.floor(Math.random() * 100) + 1 + '%');
  return 0;
}

function D10(){
  alert(Math.floor(Math.random() * 10) + 1);  // returns a random integer from 1 to 10
  return 0;
}

function characterRoll(){
  var rolls = [];
  for(var i = 0; i<9; i++){
    rolls.push(Math.floor(Math.random() * 10) + 1);
  }
  var sum = rolls.reduce(function(a,b){
    return a+b;
  }, 0);
  return sum;
}

export default HomeScreen;
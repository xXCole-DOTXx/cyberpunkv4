import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { styles } from './styles.js';


const HomeScreen = ({navigation, route}) => {
    return (
        <View style={styles.container}>
        <Button
          title="Create a character"
          onPress={() => navigation.navigate('CharacterCreate')}
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

export default HomeScreen;
import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { styles } from './styles.js';
import logo from '../../../assets/logo.png';


const HomeScreen = ({navigation, route}) => {
    return (
        <View style={styles.container}>
           <Image source={logo} style={{ width: 400, height: 100, marginBottom: 100 }} />

            <Button
            style={styles.button}
              title="Create a character"
              onPress={() => navigation.navigate('CharacterCreate')}
              color="#19AC52"
              />

              <Button
              style={styles.button}
                title="Select a character"
                onPress={() => navigation.navigate('CharacterSelect')}
                color="#19AC52"
              />
        </View>
    )
}

export default HomeScreen;
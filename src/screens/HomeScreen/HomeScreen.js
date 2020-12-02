import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

const HomeScreen = ({navigation, route}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Create a character"
          onPress={() => navigation.navigate('CharacterCreate')}
          color="#19AC52"
        />
      </View>
    )
}

export default HomeScreen;
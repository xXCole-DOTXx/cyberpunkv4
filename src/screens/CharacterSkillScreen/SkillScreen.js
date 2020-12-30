import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Picker, ScrollView} from 'react-native'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles.js';
import { getCharInfo } from '../../sharedComponents/getCharInfo.js';

const SkillScreen = ({navigation, route}) => {
    //Getting params passed from HomeScreen
    const { playerName } = route.params;

    return (
        <View style={styles.container}>
            {player?.data()?.userName && <Text>{player?.data()?.userName}</Text>}

            <View style={styles.stats}>
              {player?.data()?.stats && <Text>Int: {player?.data()?.stats.Int}</Text>}
              {player?.data()?.stats && <Text>Ref: {player?.data()?.stats.Ref}</Text>}
              {player?.data()?.stats && <Text>Tech: {player?.data()?.stats.Tech}</Text>}
              {player?.data()?.stats && <Text>Cool: {player?.data()?.stats.Cool}</Text>}
            </View>
            <View style={styles.stats}>
              {player?.data()?.stats && <Text>Attr: {player?.data()?.stats.Attr}</Text>}
              {player?.data()?.stats && <Text>Luck: {player?.data()?.stats.Luck}</Text>}
              {player?.data()?.stats && <Text>MA: {player?.data()?.stats.MA}</Text>}
              {player?.data()?.stats && <Text>Body: {player?.data()?.stats.Body}</Text>}
              {player?.data()?.stats && <Text>Emp: {player?.data()?.stats.Emp}</Text>}
            </View>
        </View>
    )
}

export default SkillScreen;
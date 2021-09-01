import React from 'react'
import { Text, View , Image , TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import GlobalStyle from '../GlobalStyle';

const Front = ({ navigation }) => {

    const pressHandler = () => {
        navigation.navigate('Music');
    }

    return(
        <View style={GlobalStyle.container}>
            <TouchableOpacity>
                <Image style={GlobalStyle.imagestyle} source={require('../assets/music.png')}/>
            </TouchableOpacity>
            <Text style={GlobalStyle.apptitle}>Music</Text>
            <FontAwesome name="arrow-circle-right" size={42} color="lightblue" onPress={pressHandler}/>
        </View>
    );
}

export default Front
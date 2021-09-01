import React , { useState } from 'react';
import { View , TextInput, TouchableOpacity , FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GlobalStyle from '../GlobalStyle';
import Item from './Item';

const Main = () => {

    const [songs,setSongs] = useState();
    const [text,setText] = useState('');

    const changeHandler = (text) => {
        console.log("changehandler",text);
        setText(
            text
        )
    }

    const getData = async () => {
       
        const str = text.split(' ');
        
        console.log('str',str);
        // console.log("getData call");

        try {
            const data = await fetch(`https://genius.p.rapidapi.com/search?q=${str[0]}%20${str[1]}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "genius.p.rapidapi.com",
                    "x-rapidapi-key": "01119f7a0emsh936804ab3d11762p1ee7b3jsne5893f00bce6"
                }
            })
            const obj = await data.json();
            // console.log(obj);
            console.log(obj.response.hits);
            setSongs(
                obj.response.hits
            )
        } catch (error) {
            alert(error.message);
        }
    }

    return(
        <View style={GlobalStyle.fetchContainer}>
            <View style={GlobalStyle.childContainer}>
                <TextInput style={GlobalStyle.inputStyle} placeholder='  Enter artist name..!' placeholderTextColor='grey' onChangeText={(text) => changeHandler(text)}/>
                <TouchableOpacity style={GlobalStyle.btnStyle} onPress={getData}>
                    <Ionicons name="md-search-sharp" size={24} color="black" />
                </TouchableOpacity>
            </View> 
            <FlatList
                data={songs}
                renderItem={({item}) => (
                    <Item name={item}/>
                )}
                keyExtractor={item => item.result.id}
                style={GlobalStyle.listview}
            />
        </View>
    );

}

export default Main

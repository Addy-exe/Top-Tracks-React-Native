import React from 'react';
import { View , Text } from 'react-native';
import globalStyle from '../GlobalStyle';

const Item = ({name}) => {
    return(
        <View style={globalStyle.itemStyle}>
            <Text>{name.result.title}</Text>
        </View>
    );
}

export default Item
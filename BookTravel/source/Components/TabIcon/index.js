import React from 'react';
import { Image, Text, View } from 'react-native';

const index = (props) => {
    return (
        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>
            <Image style={{ width:props.size, height:props.size, tintColor: props.focused ? props.focusedColor : props.color }} resizeMode="cover" source={props.icon} />
        </View>
    )
}

export default index;
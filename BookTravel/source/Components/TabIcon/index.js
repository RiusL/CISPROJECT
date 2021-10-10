import React from 'react';
import { Image, Text, View } from 'react-native';

const index = (props) => {
    return (
        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>
            <Image style={{ width:props.size, height:props.size, tintColor: props.tintColor }} resizeMode="contain" source={props.icon} />
        </View>
    )
}

export default index;
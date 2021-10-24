import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { f } from '../../Utils/dimession';

function index(props) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{ ...props.style, padding: f(10), height: f(50), backgroundColor: props.backgroundColor||"#fff", opacity: 0.26, borderRadius: f(10), justifyContent: "center", marginHorizontal: f(39) }}/>
            <Text style={{ fontSize: f(20), alignSelf: "center", textAlignVertical:"center",height:f(50), position: "absolute", color: "#4ADCCF", fontWeight: "bold" }}>{props.label}</Text>
        </TouchableOpacity>
    );
}

export default index;

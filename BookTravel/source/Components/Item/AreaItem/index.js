import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { colors } from "../../../Utils/color";
import { f, width } from "../../../Utils/dimession";

const AreaItem = ({ item, onPress,style }) => {
    return (
        <View style={{...styles.item,style}}>
            <TouchableOpacity onPress={onPress}>
                <Image source={item.image} style={styles.retangularImg} />
            </TouchableOpacity>
            <Text style={styles.name}>{item.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    retangularImg: {
        width: width - f(30),
        height: f(150),
        borderTopLeftRadius: f(10),
        borderTopRightRadius: f(10),
        marginBottom: f(10)
    },

    item: {
        borderRadius: f(15),
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        paddingBottom: f(15),
        elevation: 5,
        margin: f(7)
    },
    name: {
        textAlign: "center",
        fontSize: f(20),
        fontWeight: "bold"
    }
})

export default AreaItem;
import React from "react"
import { Image, StyleSheet, TouchableOpacity } from "react-native"
import { f } from "../../Utils/dimession"

const CircleImage = ({ item, onPress }) => {
    return <TouchableOpacity onPress={onPress}><Image source={item} style={styles.circleImg} /></TouchableOpacity>
}

const styles = StyleSheet.create({
    circleImg: {
        width: f(100),
        height: f(100),
        borderRadius: f(50),
        margin: f(10)
    },
})

export default CircleImage
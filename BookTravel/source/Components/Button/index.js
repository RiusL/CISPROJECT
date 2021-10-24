import React from 'react'
import { View, Text ,TouchableOpacity } from 'react-native'
import { styles } from './styles'
const index = (props) => {
    return (
        <View>
        <TouchableOpacity onPress={props.onClick}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
        </View>
    )
}

export default index

import React from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './style';

function style(props) {
    return (
        <View style={styles.container}>
            <TextInput placeholder="Danh lam bạn muốn tìm" onChangeText={props.onChangeText}/>
        </View>
    );
}

export default style;
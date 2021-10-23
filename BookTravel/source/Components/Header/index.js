import React from 'react';
import { Image, Text, View } from 'react-native';
import { images } from '../../Utils/image';
import { styles } from './style';

const index = (props) => {
    return (
        <View style={styles.container}>
            <Image source={props.icon || images.avatar} style={styles.avatar} />
            <View style={styles.rightContent}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.subTitle}>{props.subTitle}</Text>
            </View>
        </View>
    );
}

export default index;
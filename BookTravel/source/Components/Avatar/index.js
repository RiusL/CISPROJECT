import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
const index = props => {
  return (
    <View style={styles.viewAvatar}>
      <Image source={props.AvatarUser} style={styles.avatar} />
      <Text style={styles.fontName}>{props.userName}</Text>
    </View>
  );
};

export default index;

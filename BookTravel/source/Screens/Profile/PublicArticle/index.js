import React, {useState} from 'react';
import { SafeAreaView, Image,TextInput } from 'react-native';
import {styles} from './style';
import {Avatar} from '../../../Components';
const index = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Avatar
          AvatarUser={require('../../../../icon/avatar.png')}
          userName='Tèo'
      />
      {/* <View>
        <TextInput
          multiline={true}
          
        />
      </View> */}
    </SafeAreaView>
  );
};

export default index;

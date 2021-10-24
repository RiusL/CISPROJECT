<<<<<<< HEAD
import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  Background: {
    flex: 1,
  },
  viewContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    height: '35%',
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.05,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-between',
  },
  viewAvatar: {
    // backgroundColor: 'red',
    margin: width * 0.05,
    // flexDirection:'row',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center',
  },
  avatar: {
    width: width * 0.3,
    height: width * 0.3,
    backgroundColor: 'transparent',
    marginVertical:width * 0.05
  },
  fontName:{
    fontSize:20,
    color:'#000000',
    fontWeight:'600',
    marginHorizontal:10
  }
});
=======
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({});
>>>>>>> MarcusLu

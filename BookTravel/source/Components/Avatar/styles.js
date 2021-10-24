import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
export const styles = StyleSheet.create({
    viewAvatar: {
        // backgroundColor: 'blue',
        flexDirection:'row',
        // justifyContent:'center',
        // alignContent:'center',
        alignItems:'center',
        // alignSelf:'center',
        margin: width * 0.02
      },
      avatar: {
        width: width * 0.15,
        height: width * 0.15,
        // backgroundColor: 'red',
      },
      fontName:{
        fontSize:20,
        color:'#000000',
        fontWeight:'600',
        marginHorizontal:10
      }
});

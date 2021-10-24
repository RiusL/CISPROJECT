import { StyleSheet,Dimensions } from "react-native";
const { width,height}= Dimensions.get('screen')
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ffff'
      },
      viewHeader:{
        flex:1,
        backgroundColor:'red'
      },
      viewBody:{
        flex:2,
        backgroundColor:'blue'
      },
      avatar: {
        width: width * 0.3,
        height: width * 0.3,
        backgroundColor: 'transparent',
        marginVertical:width * 0.05,
        
      },
    });
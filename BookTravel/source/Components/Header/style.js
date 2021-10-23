import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:10
    },
    avatar:{
        resizeMode:"cover",
        width:50,
        height:50,
        borderRadius:25
    },
    rightContent:{
        justifyContent:"center",
        marginHorizontal:10
    },
    title:{
        fontSize:17,
        fontWeight:"bold"
    },
    subTitle:{
        fontSize:13
    }
})
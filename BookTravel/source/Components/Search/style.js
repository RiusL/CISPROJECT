import { StyleSheet } from "react-native";
import { colors } from "../../Utils/color";
import { f, width } from "../../Utils/dimession";

export const styles=StyleSheet.create({
    container:{
        borderRadius:f(15),
        backgroundColor:colors.grey,
        paddingVertical:f(5),
        paddingHorizontal:f(10),
        height:f(50),
        width:width-f(40),
        alignSelf:"center",
        marginVertical:f(20)
    }
})
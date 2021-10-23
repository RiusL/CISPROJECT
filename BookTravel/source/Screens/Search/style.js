import { StyleSheet } from "react-native";
import { colors } from "../../Utils/color";
import { f } from "../../Utils/dimession";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    menuItem: {
        padding: f(10),
        marginHorizontal:f(10),
        borderRadius: f(10),
        backgroundColor: colors.white,
        height:f(40),
        shadowColor: '#ccc',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
})
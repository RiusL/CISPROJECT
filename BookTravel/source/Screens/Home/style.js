import { StyleSheet } from "react-native";
import { colors } from "../../Utils/color";
import { f, width } from "../../Utils/dimession";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    circleImg: {
        width: f(100),
        height: f(100),
        borderRadius: f(50),
        margin: f(10)
    },
    retangularImg: {
        width: width - f(30),
        height: f(150),
        borderTopLeftRadius: f(10),
        borderTopRightRadius: f(10),
        marginBottom: f(10)
    },
    title: {
        fontWeight: "bold",
        margin: f(10),
        fontSize: f(18)
    },
    rightText: {
        color: "blue",
        marginTop: f(10),
        marginRight: f(5)
    },
    item: {
        borderRadius: f(15),
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        paddingBottom:f(15),
        elevation: 5,
        margin:f(7)
    },
    name: {
        textAlign: "center",
        fontSize: f(20),
        fontWeight: "bold"
    }
})

import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const width = Dimensions.get("screen").width;
export const height = Dimensions.get("screen").height;

export const f = (fSize) => {
    let value =  RFValue(fSize, 812);
    return value;
}
import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";
// import { styles } from './style';
import { images } from "../../../Utils/image";
import { width, height } from "../../../Utils/dimession";

const index = (props) => {
  return (
    <SafeAreaView>
      {/* <Text>Update Profile</Text> */}
      <View style={styles.goback}>
        <TouchableOpacity style={styles.btnBack} onPress={() => {}}>
          <Image source={images.backIcon} />
          <Text style={styles.txtBack}>Thông tin cá nhân</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.btnAva} onPress={() => {}}>
          <Image style={styles.btnAvaPlus} source={images.avatar} />
        </TouchableOpacity>
      </View>

      <View style={styles.elementTxt}>
        <Text style={styles.elementText}>Tên</Text>
        <TextInput style={styles.elementTextInput} textAlign="right" />
      </View>
      <View style={styles.elementTxt}>
        <Text style={styles.elementText}>Email</Text>
        <TextInput style={styles.elementTextInput} textAlign="right" />
      </View>
      <View style={styles.elementTxt}>
        <Text style={styles.elementText}>Điện thoại</Text>
        <TextInput style={styles.elementTextInput} textAlign="right" />
      </View>
      <View style={styles.elementTxt}>
        <Text style={styles.elementText}>Ngày sinh</Text>
        <TextInput style={styles.elementTextInput} textAlign="right" />
      </View>
      <View style={styles.elementTxt}>
        <Text style={styles.elementText}>Địa chỉ</Text>
        <TextInput style={styles.elementTextInput} textAlign="right" />
      </View>

      <View style={styles.edit}>
        <TouchableOpacity style={styles.btnEdit} onPress={() => {}}>
          <Text style={styles.txtEdit}>Cập nhật</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  goback: {
    height: width * 0.1,
  },
  btnBack: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: width * 0.02,
  },
  txtBack: {
    marginLeft: width * 0.02,
    fontSize: width * 0.05,
    color: "black",
  },
  btnAva: {
    justifyContent: "center",
    alignItems: "center",
  },
  btnAvaPlus: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: width * 0.2,
  },
  elementTxt: {
    flexDirection: "row",
    alignItems: "center",
    width: width * 0.9,
    marginHorizontal: width * 0.05,
    borderBottomWidth: 2,
    borderColor: "lightgray",
    marginTop: width * 0.03,
  },
  elementText: {
    width: width * 0.25,
    fontSize: width * 0.05,
    color: "black",
  },
  elementTextInput: {
    width: width * 0.65,
    fontSize: width * 0.04,
  },
  edit: {
    height: width * 0.1,
    width: width * 0.8,
    borderRadius: 5,
    backgroundColor: "#6699FF",
    marginHorizontal: width * 0.1,
    marginTop: width * 0.03,
    // borderWidth: 1,
  },
  btnEdit: {
    height: width * 0.1,
    width: width * 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  txtEdit: {
    fontSize: width * 0.05,
    color: "white",
  },
});

export default index;

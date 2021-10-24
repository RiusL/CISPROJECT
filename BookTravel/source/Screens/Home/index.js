import { useNavigation } from '@react-navigation/core';
import React from 'react';
<<<<<<< HEAD
import { FlatList, Image, SafeAreaView, ScrollView, ScrollViewBase, Text, TouchableOpacity, View } from 'react-native';
import { AreaItem, CircleImage, Header, Slider } from '../../Components';
import { f } from '../../Utils/dimession';
import { images } from '../../Utils/image';
import { styles } from './style';

const index = (props) => {
    const navigation = useNavigation();
    const top = [images.norland02, images.norland01, images.norland03, images.central02]
    const norland = [
        {
            "id":1,
            "name": "Vịnh Bắc Bộ",
            "image": images.norland02,
            "content": "Là trung tâm của một khu vực rộng lớn có những yếu tố ít nhiều tương đồng về địa chất, địa mạo, cảnh quan, khí hậu và văn hóa, với vịnh Bái Tử Long phía Đông Bắc và quần đảo Cát Bà phía Tây Nam, vịnh Hạ Long giới hạn trong diện tích khoảng 1.553 km² bao gồm 1.969 hòn đảo lớn nhỏ, phần lớn là đảo đá vôi, trong đó vùng lõi của vịnh có diện tích 335 km² quần tụ dày đặc 775 hòn đảo. Lịch sử kiến tạo địa chất đá vôi của vịnh đã trải qua khoảng 500 triệu năm với những hoàn cảnh cổ địa lý rất khác nhau; và quá trình tiến hóa carxtơ đầy đủ trải qua trên 20 triệu năm với sự kết hợp các yếu tố như tầng đá vôi dày, khí hậu nóng ẩm và tiến trình nâng kiến tạo chậm chạp trên tổng thể.[1] Sự kết hợp của môi trường, khí hậu, địa chất, địa mạo, đã khiến vịnh Hạ Long trở thành quần tụ của đa dạng sinh học bao gồm hệ sinh thái rừng kín thường xanh mưa ẩm nhiệt đới và hệ sinh thái biển và ven bờ với nhiều tiểu hệ sinh thái.[2] 17 loài thực vật đặc hữu[3] và khoảng 60 loài động vật đặc hữu[4] đã được phát hiện trong số hàng ngàn động, thực vật quần cư tại vịnh.",
            "related": [
                images.norland02,
                images.norland01,
                images.norland03,
                images.central02
            ]
        },
        {
            "id":2,
            "name": "Vịnh Hạ Long", "image": images.norland01, "content": "Là trung tâm của một khu vực rộng lớn có những yếu tố ít nhiều tương đồng về địa chất, địa mạo, cảnh quan, khí hậu và văn hóa, với vịnh Bái Tử Long phía Đông Bắc và quần đảo Cát Bà phía Tây Nam, vịnh Hạ Long giới hạn trong diện tích khoảng 1.553 km² bao gồm 1.969 hòn đảo lớn nhỏ, phần lớn là đảo đá vôi, trong đó vùng lõi của vịnh có diện tích 335 km² quần tụ dày đặc 775 hòn đảo. Lịch sử kiến tạo địa chất đá vôi của vịnh đã trải qua khoảng 500 triệu năm với những hoàn cảnh cổ địa lý rất khác nhau; và quá trình tiến hóa carxtơ đầy đủ trải qua trên 20 triệu năm với sự kết hợp các yếu tố như tầng đá vôi dày, khí hậu nóng ẩm và tiến trình nâng kiến tạo chậm chạp trên tổng thể.[1] Sự kết hợp của môi trường, khí hậu, địa chất, địa mạo, đã khiến vịnh Hạ Long trở thành quần tụ của đa dạng sinh học bao gồm hệ sinh thái rừng kín thường xanh mưa ẩm nhiệt đới và hệ sinh thái biển và ven bờ với nhiều tiểu hệ sinh thái.[2] 17 loài thực vật đặc hữu[3] và khoảng 60 loài động vật đặc hữu[4] đã được phát hiện trong số hàng ngàn động, thực vật quần cư tại vịnh.",
            "related": [images.norland02, images.norland01, images.norland03, images.central02]
        },
        {
            "id":3,
            "name": "Vịnh Hạ Long", "image": images.norland03, "content": "Là trung tâm của một khu vực rộng lớn có những yếu tố ít nhiều tương đồng về địa chất, địa mạo, cảnh quan, khí hậu và văn hóa, với vịnh Bái Tử Long phía Đông Bắc và quần đảo Cát Bà phía Tây Nam, vịnh Hạ Long giới hạn trong diện tích khoảng 1.553 km² bao gồm 1.969 hòn đảo lớn nhỏ, phần lớn là đảo đá vôi, trong đó vùng lõi của vịnh có diện tích 335 km² quần tụ dày đặc 775 hòn đảo. Lịch sử kiến tạo địa chất đá vôi của vịnh đã trải qua khoảng 500 triệu năm với những hoàn cảnh cổ địa lý rất khác nhau; và quá trình tiến hóa carxtơ đầy đủ trải qua trên 20 triệu năm với sự kết hợp các yếu tố như tầng đá vôi dày, khí hậu nóng ẩm và tiến trình nâng kiến tạo chậm chạp trên tổng thể.[1] Sự kết hợp của môi trường, khí hậu, địa chất, địa mạo, đã khiến vịnh Hạ Long trở thành quần tụ của đa dạng sinh học bao gồm hệ sinh thái rừng kín thường xanh mưa ẩm nhiệt đới và hệ sinh thái biển và ven bờ với nhiều tiểu hệ sinh thái.[2] 17 loài thực vật đặc hữu[3] và khoảng 60 loài động vật đặc hữu[4] đã được phát hiện trong số hàng ngàn động, thực vật quần cư tại vịnh.",
            "related": [images.norland02, images.norland01, images.norland03, images.central02]
        }
    ]
    const central = [{ "name": "Vịnh Hạ Long", "image": images.central01 }, { "name": "Vịnh Hạ Long", "image": images.central02 }, { "name": "Vịnh Hạ Long", "image": images.central03 }]
    const southward = [{ "name": "Vịnh Hạ Long", "image": images.south02 }, { "name": "Vịnh Hạ Long", "image": images.south01 }, { "name": "Vịnh Hạ Long", "image": images.south03 }]
    return (
        <SafeAreaView style={{ ...styles.container }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header title="Hello Risu" subTitle="this is slogan" />
                <Slider onPress={(item) => navigation.navigate("Detail", { "item": item })} />
                <View style={{ height: f(180) }}>
                    <Title title="Khu du lịch hàng đầu" />
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={top}
                        renderItem={({ item, index }) => <CircleImage item={item} onPress={() => navigation.navigate("Detail", { "item": item })} />}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <Title title="Khu vực miền bắc" rightText="Xem thêm" />
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={norland}
                        renderItem={({ item, index }) => <AreaItem item={item} onPress={() => navigation.navigate("Detail", { "item": item })} />}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <Title title="Khu vực miền trung" rightText="Xem thêm" />
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={central}
                        renderItem={({ item, index }) => <AreaItem item={item} onPress={() => navigation.navigate("Detail", { "item": item })} />}
                    />
                </View>
                <View style={{ flex: 1, marginBottom: f(110) }}>
                    <Title title="Khu vực miền nam" rightText="Xem thêm" />
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={southward}
                        renderItem={({ item, index }) => <AreaItem item={item} onPress={() => navigation.navigate("Detail", { "item": item })} />} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


const Title = ({ title, rightText }) => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <Text style={{ ...styles.title, flex: 1 }}>{title}</Text>
            <TouchableOpacity>
                <Text style={styles.rightText}>{rightText}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default index;
=======
import {SafeAreaView, Text} from 'react-native';
import {styles} from './style';

const index = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default index;
>>>>>>> Rius

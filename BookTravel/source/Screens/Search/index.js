import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { AreaItem, Search } from '../../Components';
import { colors } from '../../Utils/color';
import { f } from '../../Utils/dimession';
import { images } from '../../Utils/image';
import { styles } from './style';

const index = (props) => {
    const navigation = useNavigation();
    const [activedMenu, setActivedMenu] = useState(0)
    const [tempData, setTempData] = useState([])

    const region = [
        { "id": 0, "name": "Miền Bắc" },
        { "id": 1, "name": "Miền Trung" },
        { "id": 2, "name": "Đông Nam Bộ" },
        { "id": 3, "name": "Tây Nam Bộ" },
        { "id": 4, "name": "Tây Nguyên" },
    ]

    const data = [
        [
            {
                "id": 1,
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
                "id": 2,
                "name": "Vịnh Hạ Long", "image": images.norland01, "content": "Là trung tâm của một khu vực rộng lớn có những yếu tố ít nhiều tương đồng về địa chất, địa mạo, cảnh quan, khí hậu và văn hóa, với vịnh Bái Tử Long phía Đông Bắc và quần đảo Cát Bà phía Tây Nam, vịnh Hạ Long giới hạn trong diện tích khoảng 1.553 km² bao gồm 1.969 hòn đảo lớn nhỏ, phần lớn là đảo đá vôi, trong đó vùng lõi của vịnh có diện tích 335 km² quần tụ dày đặc 775 hòn đảo. Lịch sử kiến tạo địa chất đá vôi của vịnh đã trải qua khoảng 500 triệu năm với những hoàn cảnh cổ địa lý rất khác nhau; và quá trình tiến hóa carxtơ đầy đủ trải qua trên 20 triệu năm với sự kết hợp các yếu tố như tầng đá vôi dày, khí hậu nóng ẩm và tiến trình nâng kiến tạo chậm chạp trên tổng thể.[1] Sự kết hợp của môi trường, khí hậu, địa chất, địa mạo, đã khiến vịnh Hạ Long trở thành quần tụ của đa dạng sinh học bao gồm hệ sinh thái rừng kín thường xanh mưa ẩm nhiệt đới và hệ sinh thái biển và ven bờ với nhiều tiểu hệ sinh thái.[2] 17 loài thực vật đặc hữu[3] và khoảng 60 loài động vật đặc hữu[4] đã được phát hiện trong số hàng ngàn động, thực vật quần cư tại vịnh.",
                "related": [images.norland02, images.norland01, images.norland03, images.central02]
            },
            {
                "id": 3,
                "name": "Vịnh Hạ Long", "image": images.norland03, "content": "Là trung tâm của một khu vực rộng lớn có những yếu tố ít nhiều tương đồng về địa chất, địa mạo, cảnh quan, khí hậu và văn hóa, với vịnh Bái Tử Long phía Đông Bắc và quần đảo Cát Bà phía Tây Nam, vịnh Hạ Long giới hạn trong diện tích khoảng 1.553 km² bao gồm 1.969 hòn đảo lớn nhỏ, phần lớn là đảo đá vôi, trong đó vùng lõi của vịnh có diện tích 335 km² quần tụ dày đặc 775 hòn đảo. Lịch sử kiến tạo địa chất đá vôi của vịnh đã trải qua khoảng 500 triệu năm với những hoàn cảnh cổ địa lý rất khác nhau; và quá trình tiến hóa carxtơ đầy đủ trải qua trên 20 triệu năm với sự kết hợp các yếu tố như tầng đá vôi dày, khí hậu nóng ẩm và tiến trình nâng kiến tạo chậm chạp trên tổng thể.[1] Sự kết hợp của môi trường, khí hậu, địa chất, địa mạo, đã khiến vịnh Hạ Long trở thành quần tụ của đa dạng sinh học bao gồm hệ sinh thái rừng kín thường xanh mưa ẩm nhiệt đới và hệ sinh thái biển và ven bờ với nhiều tiểu hệ sinh thái.[2] 17 loài thực vật đặc hữu[3] và khoảng 60 loài động vật đặc hữu[4] đã được phát hiện trong số hàng ngàn động, thực vật quần cư tại vịnh.",
                "related": [images.norland02, images.norland01, images.norland03, images.central02]
            }
        ],
        [
            {
                "id": 1,
                "name": "Vịnh Trung Bộ",
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
                "id": 2,
                "name": "Vịnh Hạ Long", "image": images.norland01, "content": "Là trung tâm của một khu vực rộng lớn có những yếu tố ít nhiều tương đồng về địa chất, địa mạo, cảnh quan, khí hậu và văn hóa, với vịnh Bái Tử Long phía Đông Bắc và quần đảo Cát Bà phía Tây Nam, vịnh Hạ Long giới hạn trong diện tích khoảng 1.553 km² bao gồm 1.969 hòn đảo lớn nhỏ, phần lớn là đảo đá vôi, trong đó vùng lõi của vịnh có diện tích 335 km² quần tụ dày đặc 775 hòn đảo. Lịch sử kiến tạo địa chất đá vôi của vịnh đã trải qua khoảng 500 triệu năm với những hoàn cảnh cổ địa lý rất khác nhau; và quá trình tiến hóa carxtơ đầy đủ trải qua trên 20 triệu năm với sự kết hợp các yếu tố như tầng đá vôi dày, khí hậu nóng ẩm và tiến trình nâng kiến tạo chậm chạp trên tổng thể.[1] Sự kết hợp của môi trường, khí hậu, địa chất, địa mạo, đã khiến vịnh Hạ Long trở thành quần tụ của đa dạng sinh học bao gồm hệ sinh thái rừng kín thường xanh mưa ẩm nhiệt đới và hệ sinh thái biển và ven bờ với nhiều tiểu hệ sinh thái.[2] 17 loài thực vật đặc hữu[3] và khoảng 60 loài động vật đặc hữu[4] đã được phát hiện trong số hàng ngàn động, thực vật quần cư tại vịnh.",
                "related": [images.norland02, images.norland01, images.norland03, images.central02]
            },
            {
                "id": 3,
                "name": "Vịnh Hạ Long", "image": images.norland03, "content": "Là trung tâm của một khu vực rộng lớn có những yếu tố ít nhiều tương đồng về địa chất, địa mạo, cảnh quan, khí hậu và văn hóa, với vịnh Bái Tử Long phía Đông Bắc và quần đảo Cát Bà phía Tây Nam, vịnh Hạ Long giới hạn trong diện tích khoảng 1.553 km² bao gồm 1.969 hòn đảo lớn nhỏ, phần lớn là đảo đá vôi, trong đó vùng lõi của vịnh có diện tích 335 km² quần tụ dày đặc 775 hòn đảo. Lịch sử kiến tạo địa chất đá vôi của vịnh đã trải qua khoảng 500 triệu năm với những hoàn cảnh cổ địa lý rất khác nhau; và quá trình tiến hóa carxtơ đầy đủ trải qua trên 20 triệu năm với sự kết hợp các yếu tố như tầng đá vôi dày, khí hậu nóng ẩm và tiến trình nâng kiến tạo chậm chạp trên tổng thể.[1] Sự kết hợp của môi trường, khí hậu, địa chất, địa mạo, đã khiến vịnh Hạ Long trở thành quần tụ của đa dạng sinh học bao gồm hệ sinh thái rừng kín thường xanh mưa ẩm nhiệt đới và hệ sinh thái biển và ven bờ với nhiều tiểu hệ sinh thái.[2] 17 loài thực vật đặc hữu[3] và khoảng 60 loài động vật đặc hữu[4] đã được phát hiện trong số hàng ngàn động, thực vật quần cư tại vịnh.",
                "related": [images.norland02, images.norland01, images.norland03, images.central02]
            }
        ],
        [
            {
                "id": 1,
                "name": "Vịnh Nam Bộ",
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
                "id": 2,
                "name": "Vịnh Hạ Long", "image": images.norland01, "content": "Là trung tâm của một khu vực rộng lớn có những yếu tố ít nhiều tương đồng về địa chất, địa mạo, cảnh quan, khí hậu và văn hóa, với vịnh Bái Tử Long phía Đông Bắc và quần đảo Cát Bà phía Tây Nam, vịnh Hạ Long giới hạn trong diện tích khoảng 1.553 km² bao gồm 1.969 hòn đảo lớn nhỏ, phần lớn là đảo đá vôi, trong đó vùng lõi của vịnh có diện tích 335 km² quần tụ dày đặc 775 hòn đảo. Lịch sử kiến tạo địa chất đá vôi của vịnh đã trải qua khoảng 500 triệu năm với những hoàn cảnh cổ địa lý rất khác nhau; và quá trình tiến hóa carxtơ đầy đủ trải qua trên 20 triệu năm với sự kết hợp các yếu tố như tầng đá vôi dày, khí hậu nóng ẩm và tiến trình nâng kiến tạo chậm chạp trên tổng thể.[1] Sự kết hợp của môi trường, khí hậu, địa chất, địa mạo, đã khiến vịnh Hạ Long trở thành quần tụ của đa dạng sinh học bao gồm hệ sinh thái rừng kín thường xanh mưa ẩm nhiệt đới và hệ sinh thái biển và ven bờ với nhiều tiểu hệ sinh thái.[2] 17 loài thực vật đặc hữu[3] và khoảng 60 loài động vật đặc hữu[4] đã được phát hiện trong số hàng ngàn động, thực vật quần cư tại vịnh.",
                "related": [images.norland02, images.norland01, images.norland03, images.central02]
            },
            {
                "id": 3,
                "name": "Vịnh Hạ Long", "image": images.norland03, "content": "Là trung tâm của một khu vực rộng lớn có những yếu tố ít nhiều tương đồng về địa chất, địa mạo, cảnh quan, khí hậu và văn hóa, với vịnh Bái Tử Long phía Đông Bắc và quần đảo Cát Bà phía Tây Nam, vịnh Hạ Long giới hạn trong diện tích khoảng 1.553 km² bao gồm 1.969 hòn đảo lớn nhỏ, phần lớn là đảo đá vôi, trong đó vùng lõi của vịnh có diện tích 335 km² quần tụ dày đặc 775 hòn đảo. Lịch sử kiến tạo địa chất đá vôi của vịnh đã trải qua khoảng 500 triệu năm với những hoàn cảnh cổ địa lý rất khác nhau; và quá trình tiến hóa carxtơ đầy đủ trải qua trên 20 triệu năm với sự kết hợp các yếu tố như tầng đá vôi dày, khí hậu nóng ẩm và tiến trình nâng kiến tạo chậm chạp trên tổng thể.[1] Sự kết hợp của môi trường, khí hậu, địa chất, địa mạo, đã khiến vịnh Hạ Long trở thành quần tụ của đa dạng sinh học bao gồm hệ sinh thái rừng kín thường xanh mưa ẩm nhiệt đới và hệ sinh thái biển và ven bờ với nhiều tiểu hệ sinh thái.[2] 17 loài thực vật đặc hữu[3] và khoảng 60 loài động vật đặc hữu[4] đã được phát hiện trong số hàng ngàn động, thực vật quần cư tại vịnh.",
                "related": [images.norland02, images.norland01, images.norland03, images.central02]
            }
        ]
    ]

    const _onPress = (index) => {
        setActivedMenu(index);
        setTempData(data[index]);
    }

    const filterData = (text = '') => {
        tempData.concat(tempData)
        const newData = tempData.filter(item => {
            const itemData = `${item.name.toUpperCase()}`;
            return itemData.indexOf(text.toUpperCase()) > -1;
        });
        if (text.length > 0) {
            setTempData(newData)
        } else if (text.length == 0) {
            setTempData(data[activedMenu])
            console.log(data)
        }

    }

    useEffect(()=>{
        const init=()=>{
            setTempData(data[0])
        }
        init()
    },[navigation])

    return (
        <SafeAreaView style={styles.container}>
            <Search onChangeText={(text) => filterData(text)} />
            <View >
                <View style={{ marginBottom: f(15) }}>
                    <FlatList
                        data={region}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => <MenuItem style={{ marginBottom: f(5) }} activedMenu={activedMenu} index={index} item={item} onPress={() => {
                            _onPress(index)
                        }} />}
                    />
                </View>
                <View style={{ backgroundColor: colors.white }}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={tempData}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) =>
                            <View style={{ marginBottom: index == tempData.length - 1 ? f(320) : 0 }}>
                                <AreaItem item={item} onPress={() => navigation.navigate("Detail", { "item": item })} />
                            </View>}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const MenuItem = (props) => {
    return <TouchableOpacity onPress={props.onPress} style={{ ...props.style, ...styles.menuItem, backgroundColor: props.activedMenu == props.index ? "#3386FF" : "#fff" }} >
        <Text style={{ fontSize: f(14), fontWeight: "bold", color: props.activedMenu == props.index ? "#FFF" : "#494949" }}>{props.item.name}</Text>
    </TouchableOpacity>
}

export default index;
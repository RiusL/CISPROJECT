import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {background} from './../../Utils/images';
import {Button} from '../../Components';

const index = props => {
  const navigation = useNavigation();
  const [imageIndex, setImageIndex] = useState();
  useEffect(() => {
    const randomImage = Math.floor(Math.random() * background.length);
    setImageIndex(randomImage);
    return () => {
      setImageIndex();
    };
  }, []);
  return (
    <SafeAreaView style={{...styles.container}}>
      <ImageBackground
        source={background[imageIndex]}
        style={styles.Background}
        resizeMode="stretch"
        resizeMethod="auto">
        <View style={styles.viewAvatar}>
          <Image
            source={require('../../../icon/avatar.png')}
            style={styles.avatar}
          />
          <Text style={styles.fontName}>Nguyễn văn tèo téo teo</Text>
        </View>
        <View style={styles.viewContainer}>
          <Button
            text={'Chia sẻ trải nghiệm về chuyến đi'}
            onClick={() => {
              navigation.navigate('PublicArticle');
            }}
          />
          <Button
            text={'Danh sách bài viết được lưu '}
            onClick={() => {
              navigation.navigate('Article');
            }}
          />
          <Button
            text={'Cập nhật thông tin cá nhân'}
            onClick={() => {
              navigation.navigate('UpdateProfile');
            }}
          />
          {/* <Button
            text={'Thay đổi mật khẩu'}
            onClick={() => {
              navigation.navigate('UpdateProfile');
            }}
          /> */}
          <Button
            text={'Điều khoảng của chúng tôi'}
            onClick={() => alert('This app is created by team CED')}
          />
          <Button text={'Đăng xuất'} onClick={() => alert('OUT')} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default index;

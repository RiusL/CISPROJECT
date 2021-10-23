import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Button } from '../../Components';
import { colors } from '../../Utils/color';
import { f, height, width } from '../../Utils/dimession';
import { images } from '../../Utils/image';

const slides = [
    {
        key: 1,
        title: 'Vịnh Hạ Long',
        text: 'Description.\nSay something cool',
        image: images.nature01,
        backgroundColor: '#59b2ab',
    },
    {
        key: 2,
        title: 'Title 2',
        text: 'Other cool stuff',
        image: images.nature02,
        backgroundColor: '#febe29',
    },
    {
        key: 3,
        title: 'Rocket guy',
        text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
        image: images.nature03,
        backgroundColor: '#22bcb5',
    }
];

function index(props) {
    const [activeSlide, setActiveSlide] = useState(0);
    const navigation = useNavigation();
    const _renderItem = ({ item, index }) => {
        return (
            <View style={styles.slide}>
                <Image source={item.image} resizeMode="cover" style={styles.sliderImage} />
                <View style={{ position: "absolute", alignSelf: "center", height: 0.57 * height, width: width - 50, borderRadius: 15, padding: 20, backgroundColor: "white", top: height / 7 }}>
                    <Image source={item.image} resizeMode="cover" style={{ position: "absolute", alignSelf: "center", top: f(5), height: 0.5 * height - 20, margin: 10, width: width - 80, borderRadius: 15 }} />
                    <View style={{ bottom: f(20), position: "absolute", alignSelf: "center" }}>
                        <Text style={{ fontSize: f(24), fontWeight: "bold", color: colors.black }}>{item.title}</Text>
                    </View>

                </View>
                <View style={{ position: "absolute", width: width - 60, alignSelf: "center", bottom: f(110) }}>
                    {
                        index == 2
                            ?
                            <Button onPress={()=>navigation.navigate("Main")} label="Khám phá danh lam" style={{ bottom: 0}}  backgroundColor={"#fff"} />
                            : null
                    }
                </View>
            </View>
        );
    }
    const _onDone = () => {
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AppIntroSlider
                renderItem={_renderItem}
                data={slides}
                dotStyle={{ backgroundColor: "white", bottom: f(60) }}
                activeDotStyle={{ backgroundColor: "#72978F", bottom: f(60) }}
                onSlideChange={(a, b) => setActiveSlide(b)}

                showDoneButton={false} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide: {
        width: '100%',
        height: height,
        justifyContent: "center"
    },
    sliderImage: {
        width: '100%',
        height: height,
        opacity: 0.5,
        backgroundColor: "white"
    }
});

export default index;
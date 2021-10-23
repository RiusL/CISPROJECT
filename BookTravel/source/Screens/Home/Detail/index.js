import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { f, width } from '../../../Utils/dimession';
import { images } from '../../../Utils/image';

function index(props) {
    const route = useRoute()
    const { item } = route.params;
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity style={styles.backContent} onPress={() => navigation.goBack()}>
                <Image source={images.backIcon} style={styles.backIcon} resizeMode="contain" />
            </TouchableOpacity>
            <Image source={item.image || { uri: item.image }} style={styles.image} resizeMode="cover" />

            
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={item.related}
                    renderItem={({ item, index }) => <CircleImage item={item} onPress={() => navigation.navigate("Detail", { "item": item })} />}
                />
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.content}>{item.content}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const CircleImage = ({ item, onPress }) => {
    return <TouchableOpacity onPress={onPress}><Image source={item} style={styles.circleImg} /></TouchableOpacity>
}

const styles = StyleSheet.create({
    circleImg: {
        width: f(100),
        height: f(100),
        borderRadius: f(50),
        margin: f(10)
    },
    image: {
        width: width,
        height: f(400),
        borderBottomRightRadius: f(20),
        borderBottomLeftRadius: f(20),
        marginBottom: f(15)
    },
    title: {
        fontSize: f(20),
        fontWeight: "bold",
        margin: f(8)
    },
    content: {
        marginHorizontal: f(5),
        textAlign: "justify",
        marginBottom: f(115)
    },
    backIcon: {
        width: f(35),
        height: f(35)
    },
    backContent: {
        position: "absolute",
        top: f(10),
        left: f(10),
        zIndex: 100
    }
})
export 
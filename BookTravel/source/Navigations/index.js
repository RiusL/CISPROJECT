import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, ProfileScreen } from '../Screens';

const ProfileStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

export const ProfileNavigation = () => {
    return (
        <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
            <ProfileStack.Screen name="Main" component={ProfileScreen} />
        </ProfileStack.Navigator>
    )
}

export const HomeNavigation = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Main" component={HomeScreen} />
        </HomeStack.Navigator>
    )
}


import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ArticleScreen,
  HomeScreen,
  ProfileScreen,
  UpdatePasswordScreen,
  PublicArticleScreen,
  DetailScreen,
  UpdateProfileScreen,
} from '../Screens';

const ProfileStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

export const ProfileNavigation = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="Main"
      screenOptions={{headerShown: false}}>
      <ProfileStack.Screen name="Main" component={ProfileScreen} />
      <ProfileStack.Screen name="Article" component={ArticleScreen} />
      <ProfileStack.Screen name="UpdatePassword" component={UpdatePasswordScreen} />
      <ProfileStack.Screen name="UpdateProfile" component={UpdateProfileScreen} />
    </ProfileStack.Navigator>
  );
};

export const HomeNavigation = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Main" component={HomeScreen} />
            <HomeStack.Screen name="Detail" component={DetailScreen} />
        </HomeStack.Navigator>
    )
}


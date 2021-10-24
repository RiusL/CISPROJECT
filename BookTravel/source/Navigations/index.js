import * as React from 'react';
<<<<<<< HEAD
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, ProfileScreen,DetailScreen } from '../Screens';
=======
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ArticleScreen,
  HomeScreen,
  ProfileScreen,
  UpdatePasswordScreen,
  PublicArticleScreen,
  UpdateProfileScreen,
} from '../Screens';
>>>>>>> Rius

const ProfileStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
// const Stack = createNativeStackNavigator();

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
<<<<<<< HEAD
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Main" component={HomeScreen} />
            <HomeStack.Screen name="Detail" component={DetailScreen} />
        </HomeStack.Navigator>
    )
}
=======
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Main" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};
>>>>>>> Rius


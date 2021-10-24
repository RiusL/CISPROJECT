import * as React from 'react';
<<<<<<< HEAD
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GreetingScreen } from './source/Screens';
=======
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {

  PublicArticleScreen,
} from './source/Screens';
import {TabIcon} from './source/Components';
import {images} from './source/Utils/images';
>>>>>>> Rius
import HomeTab from './source/Navigations/Tabs';

const Stack = createNativeStackNavigator();
const UserStack = createNativeStackNavigator();
const UserNavigation = () => {
  return (
    <UserStack.Navigator    screenOptions={{headerShown: false}}>
      <UserStack.Screen name="HomeTab" component={HomeTab} />
      <UserStack.Screen name="PublicArticle" component={PublicArticleScreen} />
    </UserStack.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Stack.Navigator initialRouteName="Greeting" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Greeting" component={GreetingScreen} />
        <Stack.Screen name="Main" component={HomeTab} />
=======
      <Stack.Navigator
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={UserNavigation} />
>>>>>>> Rius
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {

  PublicArticleScreen,
} from './source/Screens';
import {TabIcon} from './source/Components';
import {images} from './source/Utils/images';
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
      <Stack.Navigator
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={UserNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

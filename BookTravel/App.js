import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GreetingScreen } from './source/Screens';
import { PublicArticleScreen } from './source/Screens';
import HomeTab from './source/Navigations/Tabs';

const Stack = createNativeStackNavigator();
const UserStack = createNativeStackNavigator();

const UserNavigation = () => {
  return (
    <UserStack.Navigator screenOptions={{ headerShown: false }}>
      <UserStack.Screen name="HomeTab" component={HomeTab} />
      <UserStack.Screen name="PublicArticle" component={PublicArticleScreen} />
    </UserStack.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Greeting" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Greeting" component={GreetingScreen} />
        <Stack.Screen name="Main" component={UserNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

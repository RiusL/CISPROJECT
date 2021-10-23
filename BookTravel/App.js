import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GreetingScreen } from './source/Screens';
import HomeTab from './source/Navigations/Tabs';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Greeting" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Greeting" component={GreetingScreen} />
        <Stack.Screen name="Main" component={HomeTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
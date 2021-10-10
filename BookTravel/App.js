import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BookingScreen, ChatScreen, ContactScreen, HomeScreen, SearchScreen } from './source/Screens';
import { TabIcon } from './source/Components';

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarShowLabel:false,
        headerShown: false,
        tabBarStyle: {

          ...styles.shadow
        },
        tabBarShowLabel: false
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ colors, size, focused }) => {
            return <TabIcon size={size} focusedColor={"blue"} color={"grey"} />
          }
        }}
        name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Booking" component={BookingScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={HomeTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    position: "absolute",
    bottom: 15,
    borderTopColor: "#FFFFFF",
    borderTopWidth: 0,
    left: 10,
    right: 10,
    backgroundColor: 'rgba(240, 240, 240,0.5)',
    color: "#FFFFFF",
    borderRadius: 25,
    height: 80,
    paddingTop: 10,
    paddingBottom: 10
  }
})

export default App;
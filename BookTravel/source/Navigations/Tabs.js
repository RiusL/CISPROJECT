import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { TabIcon } from "../Components";
import { images } from "../Utils/image";
import { HomeNavigation, ProfileNavigation } from ".";
import { BookingScreen, SearchScreen, PublicScreen } from "../Screens";

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          ...styles.shadow,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Profile"
        component={ProfileNavigation}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <TabIcon
                size={size}
                color={color}
                tintColor={focused ? "#3386FF" : "grey"}
                icon={images.user}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <TabIcon
                size={size}
                color={color}
                tintColor={focused ? "#3386FF" : "grey"}
                icon={images.home}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <TabIcon
                size={size}
                color={color}
                tintColor={focused ? "#3386FF" : "grey"}
                icon={images.search}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <TabIcon
                size={size}
                color={color}
                tintColor={focused ? "#3386FF" : "grey"}
                icon={images.calendar}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Chat"
        component={PublicScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <TabIcon
                size={size}
                color={color}
                tintColor={focused ? "#3386FF" : "grey"}
                icon={images.chat}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#ccc",
    shadowOffset: {
      width: 0,
      height: 10,
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
    backgroundColor: "rgba(240, 240, 240,0.9)",
    color: "#FFFFFF",
    borderRadius: 25,
    height: 80,
    paddingTop: 8,
    paddingBottom: 8,
  },
});

export default HomeTab;

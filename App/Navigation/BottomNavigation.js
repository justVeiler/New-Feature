import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Containers/HomeScreen";
import ImagePicking from "../Components/ImagePicking";
import { Image } from "react-native";
import images from "../Images/images";
import AccountScreen from "../Containers/AccountScreen";
import ImagePickingScreen from "../Containers/ImagePickingScreen";

export const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={"HomeScreen"}
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({}) => <Image source={images.iconHome} />
        }}
      />
      <Tab.Screen
        name={"ImagePickingScreen"}
        component={ImagePickingScreen}
        options={{
          // unmountOnBlur: false,
          tabBarLabel: "",
          tabBarIcon: ({}) => <ImagePicking />
        }}
        listeners={{
          tabPress: e => {
            e.preventDefault();
          }
        }}
      />
      <Tab.Screen
        name={"AccountScreen"}
        component={AccountScreen}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({}) => <Image source={images.iconAccount} />
        }}
      />
    </Tab.Navigator>
  );
}

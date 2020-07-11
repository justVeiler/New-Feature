import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Containers/HomeScreen";
import AddButtonCamera from '../Components/AddButtonCamera';
import { Image } from "react-native";
import images from "../Images/images";
import AccountScreen from '../Containers/AccountScreen';

export const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
      <Tab.Navigator>
        <Tab.Screen
          name={"Home"}
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({}) => <Image source={images.iconHome} />
          }}
        />
        <Tab.Screen
          name={"AddButtonCamera"}
          component={''}
          options={{
            // unmountOnBlur: false,
            tabBarLabel: "",
            tabBarIcon: ({}) => <AddButtonCamera />
          }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
            },
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


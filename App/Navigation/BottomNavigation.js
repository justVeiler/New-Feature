import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../Containers/HomeScreen";
import AddButtonCamera from '../Components/AddButtonCamera';
import { Image, Text, View, StyleSheet } from "react-native";
import images from "../Images/images";

const Tab = createBottomTabNavigator();

function Account() {
  return (
    <View style={styles.itemContent}>
      <Text>Wallet</Text>
    </View>
  );
}


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
          Screen={null}
          name={"Camera"}
          component={AddButtonCamera}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({}) => <AddButtonCamera />
          }}
        />

        <Tab.Screen
          name={"Account"}
          component={Account}
          options={{
            tabBarLabel: "Account",
            tabBarIcon: ({}) => <Image source={images.iconAccount} />
          }}
        />
      </Tab.Navigator>

  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  },
  itemContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

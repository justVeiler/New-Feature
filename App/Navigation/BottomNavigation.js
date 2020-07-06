import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Containers/HomeScreen";
import { Image, Text, View, StyleSheet } from "react-native";
import images from "../Images/images";

const Tab = createBottomTabNavigator();
function Voucher() {
  return (
    <View style={styles.itemContent}>
      <Text>Voucher</Text>
    </View>
  );
}
function Wallet() {
  return (
    <View style={styles.itemContent}>
      <Text>Wallet</Text>
    </View>
  );
}
function Account() {
  return (
    <View style={styles.itemContent}>
      <Text>Account</Text>
    </View>
  );
}
export default function BottomNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name={"Home"}
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",

          }}
        />
        <Tab.Screen
          name={"Voucher"}
          component={Voucher}
          options={{
            tabBarLabel: "Voucher",
          }}
        />
        <Tab.Screen
          name={"Wallet"}
          component={Wallet}
          options={{
            tabBarLabel: "Wallet",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
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

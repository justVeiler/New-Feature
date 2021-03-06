import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BottomNavigation from "../Navigation/BottomNavigation";
import { navigationRef } from "../Navigation/RootNavigation";
import HomeScreen from "../Containers/HomeScreen";
import ImagePickingScreen from '../Containers/ImagePickingScreen';
const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name={"HomeScreen"} component={BottomNavigation} />
        <Stack.Screen name={"ImagePickingScreen"} component={ImagePickingScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;

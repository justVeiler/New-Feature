import React from "react";
import { SafeAreaView, StatusBar, View, ImageBackground } from "react-native";
import HomeScreenHeader from "../Components/HomeScreenHeader";
import HomeScreenSlide from "../Components/HomeScreenSlide";
import HomeScreenNews from "../Components/HomeScreenNews";
import BottomNavigator from "../Navigation/BottomNavigation";
import images from "../Images/images";
import styles from "../Components/Styles/HomeScreenHeaderStyle";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <HomeScreenHeader/>
      <HomeScreenSlide />
      <HomeScreenNews />
    </View>
  );
}

import React from "react";
import { SafeAreaView } from "react-native";
import HomeScreenHeader from "../Components/HomeScreenHeader";
import HomeScreenSlide from "../Components/HomeScreenSlide";
import HomeScreenNews from "../Components/HomeScreenNews";
import BottomNavigator from "../Navigation/BottomNavigation";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeScreenHeader />
      <HomeScreenSlide />
      <HomeScreenNews />
    </SafeAreaView>
  );
}

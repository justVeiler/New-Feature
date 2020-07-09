import React from "react";
import { ScrollView } from "react-native";
import HomeScreenHeader from "../Components/HomeScreenHeader";
import HomeScreenSlide from "../Components/HomeScreenSlide";
import HomeScreenNews from "../Components/HomeScreenNews";

export default function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <HomeScreenHeader />
      <HomeScreenSlide />
      <HomeScreenNews />
    </ScrollView>
  );
}

import React from "react";
import {ImageBackground, Dimensions, View} from "react-native";
import images from "../Images/images";
import HomeScreenHeader from "../Components/HomeScreenHeader";
import HomeScreenSlide from "../Components/HomeScreenSlide";

export default function HomeScreen() {
  return (
    <View>
      <HomeScreenHeader />
      <HomeScreenSlide />
    </View>
  );
}

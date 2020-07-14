import React from "react";
import {
  ImageBackground,
  StatusBar,
  SafeAreaView,
  Text,
  View
} from "react-native";
import images from "../Images/images";
import styles from "./Styles/HomeScreenHeaderStyle";
import HomeScreenSlide from "../Components/HomeScreenSlide";

export default function HomeScreenHeader() {
  return (
    <ImageBackground source={images.background} style={styles.backgroundImage}>
      <SafeAreaView>
        <StatusBar
          barStyle={"dark-content"}
          translucent={true}
          backgroundColor={"transparent"}
        />
      </SafeAreaView>
      <Text style={styles.text}>Welcome</Text>
      <View style={styles.slideStyle}>
        <HomeScreenSlide />
      </View>
    </ImageBackground>
  );
}

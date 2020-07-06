import React from "react";
import { ImageBackground, StatusBar, SafeAreaView } from "react-native";
import images from "../Images/images";
import styles from "./Styles/HomeScreenHeaderStyle";

export default function HomeScreenHeader() {
  return (
    <ImageBackground source={images.background} style={styles.backgroundImage}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          barStyle={"dark-content"}
          translucent={true}
          backgroundColor={"transparent"}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}

import React from "react";
import { ImageBackground, StatusBar, SafeAreaView,TouchableOpacity, Text } from "react-native";
import images from "../Images/images";
import styles from "./Styles/HomeScreenHeaderStyle";
import { navigate } from "../Navigation/RootNavigation";
import takePicture from "./ImagePicker";

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
      {/*<TouchableOpacity*/}
      {/*  style={{ bottom: 70, backgroundColor: "blue" }}*/}
      {/*  onPress={takePicture}>*/}
      {/*  <Text>camera</Text>*/}
      {/*</TouchableOpacity>*/}
    </ImageBackground>
  );
}

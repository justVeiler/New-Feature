import React from "react";
import images from "../Images/images";
import styles from "./Styles/AccountScreenHeaderStyle";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Text,
  View
} from "react-native";

export default function AccountScreenHeader() {
  return (
    <ImageBackground source={images.background} style={styles.backgroundImage}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={"dark-content"} translucent={true} />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={images.avatar}
            resizeMode={"cover"}
            resizeMethod={"resize"}
            style={styles.avatarStyle}
          />
          <Text style={{ marginLeft: 16 }}>Hi There</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

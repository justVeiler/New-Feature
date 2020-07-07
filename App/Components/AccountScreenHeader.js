import React from "react";
import images from "../Images/images";
import styles from "./Styles/HomeScreenHeaderStyle";
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
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              marginLeft: 16,
              marginTop: 12
            }}
          />
          <Text style={{ marginLeft: 16 }}>Hi There</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  Dimensions,
  Image
} from "react-native";
import images from "../Images/images";
import styles from "../Components/Styles/HomeScreenHeaderStyle";

export default function AccountScreen() {
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

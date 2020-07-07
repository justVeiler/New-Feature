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
        <View style={{ flexDirection: "row",
            alignItems: "center", }}>
          <View
            style={{
              width: (100 / 414) * Dimensions.get("screen").width,
              height: (100 / 736) * Dimensions.get("screen").height,
              borderRadius: 60,
              backgroundColor: "golden",
              justifyContent: "center",
              alignItems: "center",
                marginLeft: 20,
                marginTop : 10
            }}>
            <Image
              source={images.avatar}
              resizeMode={"cover"}
              resizeMethod={"resize"}
              style={{
                width: 110,
                height: 110,
                  borderRadius: 60,

              }}
            />
          </View>
          <Text style={{marginLeft : 16}}>Hi There</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

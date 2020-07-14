import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";
import styles from "./Styles/HomeScreenSlideStyle";
import images from "../Images/images";

export default function HomeScreenSlide() {
  return (
    <View style={{borderRadius:12,
      backgroundColor:"white", marginTop : 80/736 * Dimensions.get("screen").height}}>
      <Swiper
        loop={true}
        timeout={5}
        innerContainerStyle={styles.swipeContainer}
        containerStyle={styles.container}>
        <View style={styles.slide}>
          <Image source={images.slide1} resizeMode="contain" />
        </View>
        <View style={styles.slide}>
          <Image source={images.slide2} resizeMode="contain" />
        </View>
        <View style={styles.slide} resizeMode="contain">
          <Text>Slide 3</Text>
        </View>
      </Swiper>
    </View>
  );
}

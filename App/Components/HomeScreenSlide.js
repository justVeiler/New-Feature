import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Swiper from "react-native-web-swiper";
import styles from "./Styles/HomeScreenSlideStyle";
import images from "../Images/images";

export default function HomeScreenSlide() {
  return (
    <View
      style={styles.container}>
      <Swiper loop={true} timeout={2} innerContainerStyle={{borderRadius:12}}>
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

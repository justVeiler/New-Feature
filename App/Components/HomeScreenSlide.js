import React from 'react';
import {View, Text, Image} from "react-native";
import Swiper from "react-native-web-swiper";
import styles from "./Styles/HomeScreenSlideStyle";
import images from "../Images/images";

export default function HomeScreenSlide() {
  return (
    <View style={styles.container}>
      <Text>aaa</Text>
      <Swiper>
        <View style={[styles.slideContainer,styles.slide1]}>
          <Text>Slide 1</Text>
        </View>
        <View style={[styles.slideContainer,styles.slide2]}>
          <Text>Slide 2</Text>
        </View>
        <View style={[styles.slideContainer,styles.slide3]}>
          <Text>Slide 3</Text>
        </View>
      </Swiper>
    </View>
  );
}




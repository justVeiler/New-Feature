import React from "react";
import { ImageBackground, Dimensions } from "react-native";
import images from "../Images/images";
import styles from "./Styles/HomeScreenHeaderStyle";

export default function HomeScreenHeader() {
  return (
    <ImageBackground
      source={images.background}
      style={styles.backgroundImage}
    />
  );
}

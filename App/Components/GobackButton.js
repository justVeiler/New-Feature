import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import images from "../Images/images";
import { navigate } from "../Navigation/RootNavigation";
import styles from "./Styles/GobackButtonStyle";

export default function GobackButton() {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigate("AccountScreen")}>
        <Image source={images.back} style={styles.arrow} />
        <Text style={styles.text}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

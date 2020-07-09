import React from "react";
import { View, Image, TouchableOpacity, Text, Dimensions, StyleSheet } from "react-native";
import images from "../Images/images";
import colors from "../Themes/Colors";

export default function GobackButton() {
  return (
    <View>
      <TouchableOpacity
        style={styles.buttonBack}>
        <Image
          source={images.back}
          style={styles.imageBack}
        />
        <Text style={styles.text}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonBack: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding : 5,
    marginLeft: 11
  },
  imageBack: {
    height: (18 / 736) * Dimensions.get("screen").height,
    width: (12 / 414) * Dimensions.get("screen").width
  },
  text: {
    marginLeft: 3,
    color:colors.blueGrey
  }
})

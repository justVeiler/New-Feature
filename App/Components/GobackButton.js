import React from "react";
import { View, Image, TouchableOpacity, Text, Dimensions } from "react-native";
import images from "../Images/images";
import colors from "../Themes/Colors";

export default function GobackButton() {
  return (
    <View>
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "flex-start", padding : 5, marginLeft: 11 }}>
        <Image
          source={images.back}
          style={{
            height: (18 / 736) * Dimensions.get("screen").height,
            width: (12 / 414) * Dimensions.get("screen").width
          }}
        />
        <Text style={{ marginLeft: 3, color:colors.blueGrey}}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

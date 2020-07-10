import React, { useContext, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../Components/Styles/ImagePickingScreenStyle";
import GobackButton from "../Components/GobackButton";
import { navigate } from "../Navigation/RootNavigation";

export default function ImagePickingScreen(props) {
  const { route } = props;
  const { params } = route;
  const getOnpress = () => {
    navigate("AccountScreen", {
      uri: params.uri
    });
  };

  return (
    <View style={styles.container}>
      <GobackButton />
      <View style={styles.container}>
        <Image source={{ uri: params.uri }} style={styles.image} />
        <TouchableOpacity
          style={styles.buttonUpload}
          onPress={() => getOnpress()}>
          <Text>UPLOAD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

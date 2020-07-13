import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../Components/Styles/ImagePickingScreenStyle";
import GobackButton from "../Components/GobackButton";
import { AppContext } from "../Providers/AppProvider";
import AsyncStorage from "@react-native-community/async-storage";

export default function ImagePickingScreen(props) {
  const { route } = props;
  const { params } = route;
  const { uri } = params;
  async function onPress() {
    try {
      await AsyncStorage.setItem("URI", await JSON.stringify(uri));
    } catch (e) {}
  }
  const veiler = AsyncStorage.getItem("URI").then(uri => JSON.parse(uri));
  console.log("VEILER", veiler);
  return (
    <View style={styles.container}>
      <GobackButton />
      <View style={styles.container}>
        <Image source={{ uri: params.uri }} style={styles.image} />
        <TouchableOpacity style={styles.buttonUpload} onPress={onPress}>
          <Text>UPLOAD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

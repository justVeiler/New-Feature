
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../Components/Styles/ImagePickingScreenStyle";
import GobackButton from "../Components/GobackButton";
import CameraRoll from "@react-native-community/cameraroll";
import {navigate} from '../Navigation/RootNavigation';

export default function ImagePickingScreen(props) {
  const { route } = props;
  const { params } = route;
  const { uri } = params;
  const onPress = () => {
    try {
      (async function() {
        await CameraRoll.saveToCameraRoll('GET','photo');
      })();
    } catch (e) {}
    if (uri !== null) {
      navigate('AccountScreen', {uri: uri})
    }
  };

  return (
    <View style={styles.container}>
      <GobackButton />
      <View style={styles.container1}>
        <Image source={{ uri: params.uri }} style={styles.image} />
        <TouchableOpacity style={styles.btnUpload} onPress={() => onPress()}>
          <Text style={styles.textUpload}>UPLOAD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

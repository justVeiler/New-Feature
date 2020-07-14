import React, { useContext } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../Components/Styles/ImagePickingScreenStyle";
import GobackButton from "../Components/GobackButton";
import { AppContext } from "../Providers/AppProvider";
import {navigate} from '../Navigation/RootNavigation';

export default function ImagePickingScreen(props) {
  const { route } = props;
  const { params } = route;
  const { uri } = params;
  const appContext = useContext(AppContext);
  const { saveImage } = appContext;

  const onPress = () => {
    try {
      (async function() {
        await saveImage(uri);
      })();
    } catch (e) {}
    if (uri !== null) {
      navigate('AccountScreen', {uri: uri})
    }
  };
  return (
    <View style={styles.container}>
      <GobackButton />
      <View style={styles.container}>
        <Image source={{ uri: uri }} style={styles.image} />
        <TouchableOpacity style={styles.buttonUpload} onPress={onPress}>
          <Text>UPLOAD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

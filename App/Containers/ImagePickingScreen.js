import React, { useContext } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../Components/Styles/ImagePickingScreenStyle";
import ImagePickingScreenGobackButton from "../Components/ImagePickingScreenGobackButton";
import { AppContext } from "../Providers/AppProvider";
import { navigate } from "../Navigation/RootNavigation";

export default function ImagePickingScreen(props) {
  const { route } = props;
  const { params } = route;
  const { image } = params;
  console.log("PARAM", params);
  const appContext = useContext(AppContext);
  const { uploadImages } = appContext;
  const onPress = () => {
    try {
      (async function() {
        await uploadImages(image);
        // navigate("AccountScreen");
      })();
    } catch (e) {}
  };

  return (
    <View style={styles.container}>
      <ImagePickingScreenGobackButton />
      <View style={styles.container}>
        <Image source={{ uri: image.uri }} style={styles.image} />
        <TouchableOpacity style={styles.buttonUpload} onPress={onPress}>
          <Text>UPLOAD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

import React, { useContext } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../Components/Styles/ImagePickingScreenStyle";
import ImagePickingScreenGobackButton from "../Components/ImagePickingScreenGobackButton";
import { AppContext } from "../Providers/AppProvider";
import { navigate } from "../Navigation/RootNavigation";

export default function ImagePickingScreen(props) {
  const { route } = props;
  const { params } = route;
  const { uri } = params;
  const appContext = useContext(AppContext);
  const { uploadImages } = appContext;
  console.log("CONTEXT", appContext);
  const onPress = () => {
    try {
      (async function() {
        await uploadImages(uri);
        // navigate("AccountScreen");
      })();
    } catch (e) {}
  };

  return (
    <View style={styles.container}>
      <ImagePickingScreenGobackButton />
      <View style={styles.container}>
        <Image source={{ uri: params.uri }} style={styles.image} />
        <TouchableOpacity style={styles.buttonUpload} onPress={onPress}>
          <Text>UPLOAD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

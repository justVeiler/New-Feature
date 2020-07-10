import React, { useContext, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../Components/Styles/ImagePickingScreenStyle";
import GobackButton from "../Components/GobackButton";
import { AppContext } from "../Providers/AppProvider";

export default function ImagePickingScreen(props) {
  const { route } = props;
  const { params } = route;
  const [imageSource, setImageSource] = useState({});
  console.log("PAAAAA", params);
  const appContext = useContext(AppContext);
  const { uploadHistory } = appContext;
  console.log("CONTEXT", appContext);
  console.log("Source", imageSource);
  const getOnpress = () => {
    try {
      (async function() {
        setImageSource(params.uri);
        console.log("UPLOAD HISTORY");
        await uploadHistory();
      })();
    } catch (e) {}
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

import React, { Component, useState } from "react";
import { View, Image, TouchableOpacity, Animated } from "react-native";
import { navigate } from "../Navigation/RootNavigation";
import styles from "./Styles/AddButtonCameraStyle";
import images from "../Images/images";
import Camera from "./ImagePicker";
import ImagePicker from "react-native-image-picker";

export default function AddButtonCamera() {
  const [filePath, setFilePath] = useState({});
  const buttonSize = new Animated.Value(1);
  const mode = new Animated.Value(0);
  function handlePress() {
    const options = {
      title: "Select Image",
      customButtons: [
        { name: "customOptionKey", title: "Choose Photo from Custom Option" }
      ],
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };
    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
        alert(response.customButton);
      } else {
        this.setState({
          filePath: response
        });
      }
    });
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.button,]}>
        <TouchableOpacity underlayColor={"#7f58ff"} onPress={handlePress}>
          {/*<Animated.View style={{transform: [{rotate: rotation}]}}>*/}
          <Image source={images.plus} />
          {/*</Animated.View>*/}
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

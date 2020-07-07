import React, { PureComponent } from "react";
import { AppRegistry, Text, TouchableOpacity, View } from "react-native";
import { RNCamera } from "react-native-camera";
import styles from "./Styles/CameraStyle";

export default function Camera() {
  AppRegistry.registerComponent("App", () => Camera);

  const takePicture = camera => {
    try {
      (async function() {
        const options = { quality: 0.5, base64: true };
        const data = await camera.takePictureAsync(options).then(data => {
          console.log("PIC", data);
        });
      })();
    } catch (e) {}
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: "Permission to use camera",
          message: "We need your permission to use your camera",
          buttonPositive: "Ok",
          buttonNegative: "Cancel"
        }}
        androidRecordAudioPermissionOptions={{
          title: "Permission to use audio recording",
          message: "We need your permission to use your audio",
          buttonPositive: "Ok",
          buttonNegative: "Cancel"
        }}
        onGoogleVisionBarcodesDetected={({ barcodes }) => {
          console.log(barcodes);
        }}
      />
      <View style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity onPress={() => takePicture} style={styles.capture}>
          <Text style={{ fontSize: 14 }}> SNAP </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

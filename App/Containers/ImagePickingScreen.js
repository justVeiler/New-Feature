import React from "react";
import { Image, Text, View, TouchableOpacity, Alert, Platform, PermissionsAndroid, ActivityIndicator, } from "react-native";
import styles from "../Components/Styles/ImagePickingScreenStyle";
import GobackButton from "../Components/GobackButton";
import RNFetchBlob from 'rn-fetch-blob';
import CameraRoll from '@react-native-community/cameraroll';

export default function ImagePickingScreen (props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     filePath: {},
  //     data: null,
  //   };
  // }
  const { route } = props;
  const { params } = route;

  const Upload = async () => {

    const response = params;
    const {uri} = response;
    console.log('here', response, uri)

    console.log("HERE", response);
    RNFetchBlob.fetch('GET', 'http://192.168.1.14', {
    },[
      {name: 'image', filename: 'image.png', type: 'image/png', uri: state.uri}
    ]).then((resp) => {

    }).then((err) => {

    })
    console.log('aaa0', )
  }

    return (
      <View style={styles.container}>
        <GobackButton />
        <View style={styles.container}>
          <Image source={{ uri: params.uri }} style={styles.image} />
          <Text style={styles.sourceText}>{"Source: " + route.params.uri}</Text>
        </View>
        <TouchableOpacity onPress={Upload} style={{padding: 10}}>
          <Text >Upload</Text>
        </TouchableOpacity>
      </View>
    );
}

import React from "react";
import { Image, Text, View, TouchableOpacity, Alert, Platform, PermissionsAndroid, ActivityIndicator, } from "react-native";
import styles from "../Components/Styles/ImagePickingScreenStyle";
import GobackButton from "../Components/GobackButton";
import RNFetchBlob from 'rn-fetch-blob';
import CameraRoll from '@react-native-community/cameraroll';
import {navigate} from '../Navigation/RootNavigation';
import colors from '../Themes/Colors';

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
  console.log('aaa', params)

  const Upload = async () => {
    const response = params;
    const {uri} = response;
    RNFetchBlob.fetch('GET', 'http://192.168.1.184',{
    },[
      {name: 'Image', filename: 'image.png', type: 'image/png', uri: uri}
    ]).then((resp) => {
      console.log('aaa', resp)
      alert(JSON.stringify(resp));
    }).then((err) => {
    })
    if (uri !== null) {
      navigate('AccountScreen', {uri: uri})
    }
    return response;
  }

    return (
      <View style={styles.container}>
        <GobackButton />
        <View style={styles.container1}>
          <Image source={{ uri: params.uri }} style={styles.image} />
          <Text style={styles.sourceText}>{"Source: " + route.params.uri}</Text>
          <TouchableOpacity onPress={Upload} style={styles.btnUpload}>
            <Text style={styles.textUpload}>Upload</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
}

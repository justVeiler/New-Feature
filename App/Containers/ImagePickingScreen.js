import React from "react";
import { Image, Text, View, TouchableOpacity, Alert, Platform, PermissionsAndroid, ActivityIndicator, } from "react-native";
import styles from "../Components/Styles/ImagePickingScreenStyle";
import GobackButton from "../Components/GobackButton";
import RNFetchBlob from 'rn-fetch-blob';
import CameraRoll from '@react-native-community/cameraroll';

export default class ImagePickingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
      uri: null,
    };
  }


  Upload = async () => {
    RNFetchBlob.fetch('GET', 'http://192.168.1.14', {
    },[
      {name: 'image', filename: 'image.png', type: 'image/png', uri: this.state.uri}
    ]).then((resp) => {

    }).then((err) => {

    })
    console.log('aaa0', uri)
  }
  render() {
    console.log('HREE', this.Upload)
    const { route } = this.props;
    const { params } = route;
    return (
      <View style={styles.container}>
        <GobackButton />
        <View style={styles.container}>
          <Image source={{ uri: params.uri }} style={styles.image} />
          <Text style={styles.sourceText}>{"Source: " + route.params.uri}</Text>
        </View>
        <TouchableOpacity onPress={this.Upload} style={{padding: 10}}>
          <Text >Upload</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

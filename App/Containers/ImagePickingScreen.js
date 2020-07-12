import React, {Component} from "react";
import { Image, Text, View, TouchableOpacity, Alert, Platform, PermissionsAndroid, ActivityIndicator, } from "react-native";
import styles from "../Components/Styles/ImagePickingScreenStyle";
import GobackButton from "../Components/GobackButton";
import RNFetchBlob from 'rn-fetch-blob';
import CameraRoll, {saveToCameraRoll} from '@react-native-community/cameraroll';
import {navigate} from '../Navigation/RootNavigation';
import colors from '../Themes/Colors';

export default class ImagePickingScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
      data: null,
    };
  }

  handleButtonPress = (image) => {

    const newImage = this.state.fileList;
    const source = {uri: image.uri};
    console.log('item', item)
    const item = {
      id: Date.now(),
      uri: source,
      content: image.data,
    }
    newImage.push(item);
    this.setState({fileList: newImage})
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'All',
    })
      .fetch('GET', this.props.uri)
      .then(r => {
        this.setState({ photos: r.edges });
      })
      .catch((err) => {
        //Error Loading Images
      });
    console.log('here', uri)
  };



  Upload = async () => {
    const {route} = this.props;
    const {params} = route;
    const response = params;
    const {uri} = response;
    RNFetchBlob.fetch('GET', 'http://192.168.1.184',{
    },[
      {name: 'Image', filename: 'image.png', type: 'image/png', uri: uri}
    ]).then((resp) => {
      alert(JSON.stringify(resp));
      this.saveToCameraRoll()
    }).then(image => {
      this.handleButtonPress(image);
    })
    if (uri !== null) {
      navigate('AccountScreen', {uri: uri})
    }
    return response;
  }
render() {
    const {route} = this.props
    const {params} = route;
    const {uri} = params;
  return (
    <View style={styles.container}>
      <GobackButton />
      <View style={styles.container1}>
        <Image source={{ uri: params.uri }} style={styles.image} />
        <Text style={styles.sourceText}>{"Source: " + route.params.uri}</Text>
        <TouchableOpacity onPress={this.Upload} style={styles.btnUpload}>
          <Text style={styles.textUpload}>Upload</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}


}

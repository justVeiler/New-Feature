import React, { Component } from "react";
import {View, Image, TouchableOpacity, Animated, AsyncStorage} from 'react-native';
import { navigate } from "../Navigation/RootNavigation";
import styles from "./Styles/AddButtonCameraStyle";
import images from "../Images/images";
import ImagePicker from "react-native-image-picker";
import ImagePickingScreen from "../Containers/ImagePickingScreen";
import newsData from './HomeScreenNewsData';

export default class ImagePicking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSource: {}
    };
  }


  handlePress = () => {
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
      // console.log("Response = ", response);
      const { uri } = response;
      navigate("ImagePickingScreen", {
        uri: uri,
        response: response
      });
      if (response.didCancel) {
        console.log("User cancelled image picker");
        navigate("HomeScreen");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
        alert(response.customButton);
      } else {
        this.setState({
          imageSource: { uri: response.uri }
        });
      }
    })

  };
  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.button]}>
          <TouchableOpacity
            underlayColor={"#7f58ff"}
            onPress={this.handlePress.bind(this)}>
            <Image source={images.plus} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}

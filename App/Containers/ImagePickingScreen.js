import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../Components/Styles/ImagePickingScreenStyle";
import GobackButton from "../Components/GobackButton";
import uploadFile from "../Lib/API/Upload";

export default class ImagePickingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }
  upload() {
    uploadFile([
      { name: "info", data: "KhoaPham" },
      { name: "avatar", filename: "avatar.png", data: this.state.data }
    ])
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    const { route } = this.props;
    const { params } = route;
    console.log("PAAAAA", params);
    return (
      <View style={styles.container}>
        <GobackButton />
        <View style={styles.container}>
          <Image source={{ uri: params.uri }} style={styles.image} />
          <TouchableOpacity
            style={{ backgroundColor: "red", width: 200, height: 200 }}>
            <Text>UPLOAD</Text>
          </TouchableOpacity>

          {/*<Text style={styles.sourceText}>{"Source: " + route.params.uri}</Text>*/}
        </View>
      </View>
    );
  }
}

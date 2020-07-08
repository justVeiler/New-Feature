import React from "react";
import { Image, Text, View } from "react-native";
import styles from "../Components/Styles/ImagePickingScreenStyle";
import GobackButton from "../Components/GobackButton";

export default class ImagePickingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {}
    };
  }

  render() {
    const { route } = this.props;
    const { params } = route;
    return (
      <View style={styles.container}>
        <GobackButton />
        <View style={styles.container}>
          <Image source={{ uri: params.uri }} style={styles.image} />
          <Text style={styles.sourceText}>{"Source: " + route.params.uri}</Text>
        </View>
      </View>
    );
  }
}

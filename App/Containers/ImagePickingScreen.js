import React from "react";
import { Image, Text, View, Dimensions } from "react-native";
import { navigate } from "../Navigation/RootNavigation";
import styles from "../Components/Styles/ImagePickingScreenStyle";

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
        <View style={styles.container}>
          <Image source={{ uri: params.uri }} style={styles.image} />
          <Text style={styles.sourceText}>{"Source: " + route.params.uri}</Text>
        </View>
      </View>
    );
  }
}

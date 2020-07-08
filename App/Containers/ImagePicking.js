import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ImagePicker from "react-native-image-picker";
import { navigate } from "../Navigation/RootNavigation";

export default class ImagePicking extends React.Component {
  constructor(route) {
    super(route);
    this.state = {
      filePath: {}
    };
    const { params } = route.route;
    const {uri} = params;
    console.log("Route", route);
    console.log("Params", params);
    console.log("UURRII", uri);
    console.log("HERE");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Image
            source={{
              uri: "data:image/jpeg;base64," + this.state.filePath.data
            }}
            style={{ width: 100, height: 100 }}
          />
          <Image
            source={{ uri: this.state.filePath.uri }}
            style={{ width: 250, height: 250 }}
          />
          <Text style={{ alignItems: "center" }}>{this.uri}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

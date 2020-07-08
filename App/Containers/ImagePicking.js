import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function ImagePicking() {
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
        <Text style={{ alignItems: "center" }}>{this.state.filePath.uri}</Text>
        <Button title="Choose File" onPress={this.chooseFile.bind(this)} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

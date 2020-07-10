import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 20
  },
  image: {
    marginLeft: 16,
    marginRight: 16,
    width: (382 / 414) * Dimensions.get("screen").width,
    height: (450 / 736) * Dimensions.get("screen").height
  },
  sourceText: {
    marginLeft: 16,
    alignItems: "center",
    marginRight: 16,
    marginTop: 10
  },
  buttonUpload: {
    backgroundColor: "blue",
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginLeft : 16
  }
});

export default styles;

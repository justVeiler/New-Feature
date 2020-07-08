import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 40
  },
  image: {
    marginLeft: 16,
    marginRight: 16,
    width: (382 / 414) * Dimensions.get("screen").width,
    height: (400 / 736) * Dimensions.get("screen").height
  },
  sourceText: {
    marginLeft: 16,
    alignItems: "center",
    marginRight: 16,
    marginTop: 10
  }
});

export default styles;

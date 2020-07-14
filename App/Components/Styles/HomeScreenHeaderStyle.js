import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  backgroundImage: {
    alignItems: "center",
    width: "100%",
    height: (160 / 736) * Dimensions.get("screen").height
  },
  text: {
    fontSize: 30,
    color: "white",
    marginTop: (25 / 736) * Dimensions.get("screen").height
  },
  slideStyle: {
    width: ((414 - 16) / 414) * Dimensions.get("screen").width
  }
});
export default styles;

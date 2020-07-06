import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: (180 / 736) * Dimensions.get("screen").height
  }
});
export default styles;

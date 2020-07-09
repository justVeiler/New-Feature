import { Dimensions, StyleSheet } from "react-native";
import colors from "../../Themes/Colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 5,
    marginLeft: 11
  },
  arrow: {
    height: (18 / 736) * Dimensions.get("screen").height,
    width: (12 / 414) * Dimensions.get("screen").width
  },
  text: { marginLeft: 3, color: colors.blueGrey }
});

export default styles;

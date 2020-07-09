import { Dimensions, StyleSheet } from "react-native";
import colors from "../../Themes/Colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    marginLeft: 10,
    marginTop: (15 / 736) * Dimensions.get("screen").height,
    backgroundColor: "white",
    marginRight: (320 / 414) * Dimensions.get("screen").width
  },
  arrow: {
    height: (18 / 736) * Dimensions.get("screen").height,
    width: (12 / 414) * Dimensions.get("screen").width,
    opacity: 0.7
  },
  text: {
    fontSize: (16 / 736) * Dimensions.get("screen").height,
    lineHeight: (18 / 736) * Dimensions.get("screen").height,
    marginLeft: 3,
    color: colors.blueGrey,
    flex: 1
  }
});

export default styles;

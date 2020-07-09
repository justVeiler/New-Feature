import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  slideContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12
  },
  container: {
    flex: 1,
    marginTop: (-55 / 736) * Dimensions.get("screen").height,
    marginLeft: 16,
    marginRight: 16
  },
  swipeContainer: {
    borderRadius: 12,
    height: (140 / 736) * Dimensions.get("screen").height
  },
  slide: {
    borderRadius: 12,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default styles;

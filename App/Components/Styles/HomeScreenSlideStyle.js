import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  slideContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  container: {
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 12,
    flex: 1,
    marginTop: (-55 / 736) * Dimensions.get("screen").height,
    height: (140 / 736) * Dimensions.get("screen").height,
  },
  swipeContainer: {
    borderRadius: 12,
    height: (140 / 736) * Dimensions.get("screen").height,
    marginRight: 16,
  },
  slide: {
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default styles;

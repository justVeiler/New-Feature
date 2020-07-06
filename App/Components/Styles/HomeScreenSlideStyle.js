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
    marginTop: -50,
    marginLeft: 16,
    marginRight: 16
  },
  swipeContainer: { borderRadius: 12, height: 140 },
  slide: {
    borderRadius: 12,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default styles;

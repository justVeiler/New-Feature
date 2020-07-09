import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: (160 / 736) * Dimensions.get("screen").height
  },
  avatarStyle: {
    width: (120 / 414) * Dimensions.get("screen").width,
    height: (100 / 736) * Dimensions.get("screen").height,
    borderRadius: 60,
    marginLeft: 16,
    marginTop: (20 / 736) * Dimensions.get("screen").height
  },
  userInfoStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25/736 * Dimensions.get("screen").height
  }
});
export default styles;

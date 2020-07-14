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
    marginTop: (10 / 736) * Dimensions.get("screen").height
  },
  userInfoStyle: {
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center"
  }
});
export default styles;

import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: (170 / 736) * Dimensions.get("screen").height
  },
  avatarStyle: {
    width: 110,
    height: 110,
    borderRadius: 60,
    marginLeft: 16,
    marginTop: (20 / 736) * Dimensions.get("screen").height
  },
  userInfoStyle: {
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center"
  }
});
export default styles;

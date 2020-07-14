import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../Themes/Colors";

const styles = StyleSheet.create({
  headerStyle: {
    marginLeft: 16,
    fontSize: 26,
    color: Colors.blueGrey,
    marginTop: (5 / 736) * Dimensions.get("screen").height,
    paddingBottom: 5
  },
  container: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: (4 / 736) * Dimensions.get("screen").height
  },
  itemStyle: {
    marginLeft: 18,
    marginRight: 18
  },
  headerText: {
    lineHeight: 26,
    fontSize: 22,
    padding: 5
  },
  descText: {
    lineHeight: 18,
    fontSize: 18,
    fontStyle: "italic",
    color: Colors.velvet,
    padding: 5
  },
  contentText: {
    fontSize: 16,
    padding: 5,
    marginBottom: 10
  },
  flatListStyle: {  backgroundColor: "white" },
  headerComponentStyle: {
    marginBottom: (100 / 736) * Dimensions.get("screen").height
  },
  backgroundImage: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: (160 / 736) * Dimensions.get("screen").height
  },
  text: {
    alignSelf:"center",
    fontSize: 30,
    color: "white",
    marginTop: (25 / 736) * Dimensions.get("screen").height
  },
  slideStyle: {
    width: ((414 - 16) / 414) * Dimensions.get("screen").width
  }
});
export default styles;

import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../Themes/Colors";

const styles = StyleSheet.create({
  newsStyle: {
    flex: 1
  },
  headerStyle: {
    marginLeft: 16,
    fontSize: 26,
    color: Colors.blueGrey,
    marginTop: (-130 / 736) * Dimensions.get("screen").height
  },
  itemStyle: {
    marginLeft: 18,
    marginRight: 18,
    marginBottom: 6
  },
  headerText: {
    lineHeight: 26,
    fontSize: 22,
    padding: 3
  },
  descText: {
    lineHeight: 18,
    fontSize: 18,
    fontStyle: "italic",
    color: Colors.velvet,
    padding: 3
  },
  contentText: {
    fontSize: 16,
    marginBottom: 10,
    padding: 3
  }
});
export default styles;

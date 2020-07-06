import { StyleSheet } from "react-native";
import Colors from "../../Themes/Colors";

const styles = StyleSheet.create({
  newsStyle: {
    flex: 1
  },
  headerStyle: {
    marginLeft: 16,
    fontSize: 26,
    color: Colors.blueGrey,
    marginTop: (-150 / 736) * Dimensions.get("screen").height
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
  }
});
export default styles;

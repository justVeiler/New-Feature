import { StyleSheet } from "react-native";
import Colors from "../../Themes/Colors";

const styles = StyleSheet.create({
  newsStyle: {
    flex: 1
  },
  itemStyle: {
    marginLeft: 16,
    marginRight: 16
  },
  headerText: {
    lineHeight: 30,
    fontSize: 26,
    padding: 5
  },
  descText: {
    lineHeight: 26,
    fontSize: 22,
    fontStyle: "italic",
    color: Colors.blueGrey,
    padding: 5
  },
  contentText: {
    fontSize: 18,
    padding: 5
  }
});
export default styles;

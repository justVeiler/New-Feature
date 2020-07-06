import { StyleSheet } from "react-native";
import Colors from "../../Themes/Colors";

const styles = StyleSheet.create({
  newsStyle: {
    flex: 1
  },
  headerText: {
    lineHeight: 30,
    fontSize: 26
  },
  descText: {
    lineHeight: 26,
    fontSize: 22,
    fontStyle: "italic",
    color: Colors.blueGrey
  },
  contentText: {
    fontSize: 18
  }
});
export default styles;

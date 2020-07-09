import { StyleSheet, Dimensions } from "react-native";
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';

const styles = StyleSheet.create({
  backgroundImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: (160 / 736) * Dimensions.get("screen").height
  },
  text: {
    fontSize: 30,
    color: Colors.paleGrey
  }
});
export default styles;

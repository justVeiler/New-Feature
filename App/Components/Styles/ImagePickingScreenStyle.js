import { Dimensions, StyleSheet } from "react-native";
import colors from '../../Themes/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 20
  },
  container1: {
    alignItems: 'center',
  },
  btnUpload: {
    padding: 10,
    top: 10,
    borderRadius: 10,
    backgroundColor: colors.dodgerBlue,
  },
  textUpload: {
    color: colors.paleGrey,
    fontSize: 25
  },
  image: {
    marginLeft: 16,
    marginRight: 16,
    width: (382 / 414) * Dimensions.get("screen").width,
    height: (450 / 736) * Dimensions.get("screen").height
  },
  sourceText: {
    marginLeft: 16,
    alignItems: "center",
    marginRight: 16,
    marginTop: 10
  }
});

export default styles;

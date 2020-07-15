import { StyleSheet } from "react-native";
import colors from '../../Themes/Colors';

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    alignItems: "center"
  },
  button: {
    backgroundColor: '#64b627',
    alignItems: "center",
    justifyContent: "center",
    width: 72,
    height: 72,
    borderRadius: 36,
    shadowColor: colors.greyishBrown,
    shadowRadius: 5,
    shadowOffset: { height: 10 },
    shadowOpacity: 0.3,
    borderWidth: 3,
    borderColor: "#fff",
    elevation: 5
  },
  secondaryButton: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#7e58ff"
  }
});

export default styles;

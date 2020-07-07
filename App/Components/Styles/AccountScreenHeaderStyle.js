import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    backgroundImage: {
        width: "100%",
        height: (160 / 736) * Dimensions.get("screen").height
    },
    avatarStyle: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginLeft: 16,
        marginTop: (10/ 736) * Dimensions.get('screen').height
    }
});
export default styles;

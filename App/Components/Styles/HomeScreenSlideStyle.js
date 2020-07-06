import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'column'
  },
  slideContainer: {
    flex: 1,
    alignItems:"center",
    justifyContent:"center",
  },
  slide1: {
    backgroundColor: "rgba(20,20,200,0.3)"
  },
  slide2: {
    backgroundColor: "rgba(20,200,20,0.3)"
  },
  slide3: {
    backgroundColor: "rgba(200,20,20,0.3)"
  },
})

export default styles;

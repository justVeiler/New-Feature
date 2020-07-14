import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../Themes/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  image: {
    width: '100%',
    height: '50%'
  },
  back: {
    alignSelf: 'flex-start',
    position: 'absolute',
    padding: 10,
    left: 10,
    top: 20,
  },
  arrow: {
    height: (18 / 736) * Dimensions.get("screen").height,
    width: (12 / 414) * Dimensions.get("screen").width,
    opacity: 0.7
  }
})

export default styles;

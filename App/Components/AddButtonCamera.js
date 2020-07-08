import React, {Component} from 'react';
import {View, TouchableHighlight, Image, TouchableOpacity, Animated} from 'react-native';
import {navigate} from '../Navigation/RootNavigation';
import styles from './Styles/AddButtonCameraStyle';
import images from '../Images/images';

export default function AddButtonCamera(){
  const buttonSize = new Animated.Value(1);
  const mode = new Animated.Value(0);
  function handlePress() {
    navigate('Camera')
    Animated.sequence([
      Animated.timing(buttonSize,{
        toValue: 0.95,
        duration: 0.5
      }),
      Animated.timing(buttonSize, {
        toValue: 1
      }),
    ]).start();
  }
  const sizeStyle = {
    transform: [{scale: buttonSize}]
  }
  return (
    <View style={styles.container}>

      <Animated.View style={[styles.button, sizeStyle]}>
        <TouchableOpacity underlayColor={'#7f58ff'} onPress={handlePress} >
        {/*<Animated.View style={{transform: [{rotate: rotation}]}}>*/}
            <Image source={images.plus} />
          {/*</Animated.View>*/}
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}


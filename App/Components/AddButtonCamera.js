import React, {Component} from 'react';
import {View, TouchableHighlight, Image, TouchableOpacity, Animated} from 'react-native';
import styles from './Styles/AddButtonCameraStyle';
import images from '../Images/images';

export default function AddButtonCamera(){
  const buttonSize = new Animated.Value(1);
  const mode = new Animated.Value(0);
  function handlePress() {
    Animated.sequence([
      Animated.timing(buttonSize,{
        toValue: 0.95,
        duration: 200
      }),
      Animated.timing(buttonSize, {
        toValue: 1
      }),
      Animated.timing(mode, {
        toValue: mode._value === 0 ? 1 : 0
      })
    ]).start();
  }
  const sizeStyle = {
    transform: [{scale: buttonSize}]
  }
  const rotation = mode.interpolate({
    inputRange: [0,1],
    outputRange: ['0deg', '45deg']
  })

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.button, sizeStyle]}>
        <TouchableHighlight underlayColor={'#7f58ff'} onPress={handlePress}>
          <Animated.View style={{transform: [{rotate: rotation}]}}>
            <Image source={images.plus} />
          </Animated.View>
        </TouchableHighlight>
      </Animated.View>
    </View>
  );
}


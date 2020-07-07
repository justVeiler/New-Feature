import React from 'react';
import {View, Text, TouchableHighlight, Image, TouchableOpacity} from 'react-native';
import styles from './Styles/AddButtonCameraStyle';
import images from '../Images/images';

export default function AddButtonCamera() {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <TouchableOpacity underlayColor={'#7f58ff'} >
          <View>
            <Image source={images.plus} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}


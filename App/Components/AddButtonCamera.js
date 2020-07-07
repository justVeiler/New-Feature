import React from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';
import styles from './Styles/AddButtonCameraStyle';
import images from '../Images/images';

export default function AddButtonCamera(props) {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <TouchableHighlight underlayColor={'#7f58ff'}>
          <View>
            <Image source={images.plus} />
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}


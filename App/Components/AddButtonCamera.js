import React from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';
import styles from './Styles/AddButtonCameraStyle';
import images from '../Images/images';
import {navigate} from '../Navigation/RootNavigation';

export default function AddButtonCamera() {
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


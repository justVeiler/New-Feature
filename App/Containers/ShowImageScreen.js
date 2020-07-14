import React from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import styles from '../Components/Styles/ShowImageScreenStyle';
import images from '../Images/images';
import {navigate} from '../Navigation/RootNavigation';

function ShowImageScreen(props) {
  const {route} = props;
  const {params} = route;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate('AccountScreen')} style={styles.back}>
        <Image source={images.back} style={styles.arrow}/>
      </TouchableOpacity>
      <Image source={{uri: params.item}} style={styles.image}/>
    </View>
  );
}

export default ShowImageScreen;

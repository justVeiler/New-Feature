
import React, {useContext} from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../Components/Styles/ImagePickingScreenStyle";
import GobackButton from "../Components/GobackButton";
import CameraRoll from "@react-native-community/cameraroll";
import {navigate} from '../Navigation/RootNavigation';
import {LocalStorage} from '../Lib/LocalStorage';
import {AuthContext} from '../Providers';

export default function ImagePickingScreen(props) {
  const authContext =useContext(AuthContext);
  const {is_uri} = authContext;
  console.log('ggg', is_uri)

  const { route } = props;
  const { params } = route;
  const { uri } = params;
  const onPress = nextAppState => {
    if (nextAppState === '') {
      LocalStorage.get('uri').then(uri => {
        console.log('lll', uri)
        if (uri !== null) {
          is_uri(uri, onSuccess, onFail)
        }
      })
    }
    // try {
    //   (async function() {
    //     await LocalStorage.get('GET').then(uri)
    //   })();
    // } catch (e) {}
    if (uri !== null) {
      navigate('AccountScreen', {uri: uri})
    }
  };

  const onSuccess = is_uri => {
    if (is_uri) {
      navigate("AccountScreen");
    } else {

    }
  };

  const onFail = () => {}

  return (
    <View style={styles.container}>
      <GobackButton />
      <View style={styles.container1}>
        <Image source={{ uri: params.uri }} style={styles.image} />
        <TouchableOpacity style={styles.btnUpload} onPress={() => onPress()}>
          <Text style={styles.textUpload}>UPLOAD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


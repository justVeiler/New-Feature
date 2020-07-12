import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Image, PermissionsAndroid, Platform, ScrollView } from "react-native";
import styles from "./Styles/AccountScreenInfoListStyle";
import accountData from "./AccountScreenData";
import ImagePicker from 'react-native-image-picker';
import CameraRoll from '@react-native-community/cameraroll';


export default class AccountScreenInfoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: ''
    };
  }

  _handleButtonPress = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos',
    })
      .then(r => {
        this.setState({photos: r.edges});
      })
      .catch((err) => {
        //Error Loading Images
      });
  };

  render() {
    const {params} = this.props;
    const {uri} = params
    console.log('xxx', params)

    return (
      <View style={{flex: 1}}>
        <Text style={styles.headerStyle}>History</Text>
        <View style={{alignItems: 'center', marginTop: 10,}}>
          <Image
            source={{uri: uri}}
            style={{
              width: 300,
              height: 100,
            }}
          />
        </View>
      </View>
    );
  }
}

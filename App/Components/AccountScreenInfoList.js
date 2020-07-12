import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, Platform, ScrollView, Alert } from "react-native";
import styles from "./Styles/AccountScreenInfoListStyle";
import accountData from "./AccountScreenData";
import ImagePicker from 'react-native-image-picker';
import CameraRoll from '@react-native-community/cameraroll';
import uri from 'rn-fetch-blob/utils/uri';
import index from 'rn-fetch-blob';


export default class AccountScreenInfoList extends Component{
  constructor (props) {
    super(props);

    this.state = {
      fileList: []
    };
  }
  // _handleButtonPress = () => {
  //   const {params} = this.props;
  //   const {uri} = params
  //   const newImage = this.state.fileList;
  //   const source = {uri: params.uri};
  //   console.log('item', item)
  //   const item = {
  //     id: Date.now(),
  //     uri: source,
  //     content: params.data,
  //   }
  //   newImage.push(item);
  //   this.setState({fileList: newImage})
  //   CameraRoll.getPhotos({
  //     first: 20,
  //     assetType: 'All',
  //   })
  //     .fetch('GET', this.props.uri)
  //     .then(r => {
  //       this.setState({ photos: r.edges });
  //     })
  //     .catch((err) => {
  //       //Error Loading Images
  //     });
  //   console.log('here', uri)
  // };

  // saveToCameraRoll() {
  //   CameraRoll.saveToCameraRoll(this.state.uri).then(Alert.alert('Success', 'Saved to camera roll!'))
  // }

  renderItem = ({item}) => {
    const {params} = this.props;
    const {uri} = params;
    item.uri
    return (
      <View>
        <Image source={{uri: uri}} />
      </View>
    )
  }

  render() {
    const {params} = this.props;
    const {uri} = params;
    const {fileList} = this.state;
    console.log('fff', uri)
    return (
      <View style={{flex: 1}}>
        <Text style={styles.headerStyle}>History</Text>
        <Text style={styles.headerStyle}></Text>
        <View style={{alignItems: 'center', marginTop: 10,}}>
          <FlatList
            data={fileList}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            extraData={this.state}
          />
          <Image source={{uri: uri}} />
        </View>
      </View>
    );
  }
}

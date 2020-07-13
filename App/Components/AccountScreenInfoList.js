import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Image, PermissionsAndroid, FlatList, ScrollView } from "react-native";
import styles from "./Styles/AccountScreenInfoListStyle";
import accountData from "./AccountScreenData";
import ImagePicker from 'react-native-image-picker';
import CameraRoll from '@react-native-community/cameraroll';
import images from '../Images/images';
import imageData from '../Data/Data';

export default class AccountScreenInfoList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  ProductItem = ({image}) => {
    return(
      <View>
        <Image source={image} style={{width: 200, height: 100}}/>
      </View>
    )
    try {
      (async function() {
        await CameraRoll.saveToCameraRoll('GET','photo');
      })();
    } catch (e) {}
  }

  render() {
    // const {params} = this.props;

    const {params} = this.props;
    console.log('Param', params)
    return (
      <View style={{flex: 1}}>
        <Text style={styles.headerStyle}>History</Text>
        <View style={{alignItems: 'center', marginTop: 10}}>
          <ScrollView>
            <View>
              {[
                {image1: params},
              ].map((e, index) => (
                <View key={index.toString()}>
                  <FlatList
                    data={imageData}
                    renderItem={this.ProductItem} />
                </View>

              ))}
            </View>
          </ScrollView>
          {/*{this.state.photos === null ? (*/}
          {/*  <Text>{this.state.params}</Text>*/}
          {/*) : (*/}
          {/*  <Image source={ params} style={{width: 200, height: 100}}/>*/}
          {/*)}*/}
        </View>
      </View>
    );
  }


}

import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Image, PermissionsAndroid, FlatList, ScrollView } from "react-native";
import styles from "./Styles/AccountScreenInfoListStyle";
import accountData from "./AccountScreenData";
import ImagePicker from 'react-native-image-picker';
import CameraRoll from '@react-native-community/cameraroll';
import images from '../Images/images';


export default function AccountScreenInfoList(props){
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     photos: []
  //   };
  // }

  const ProductItem = ({image}) => {
    return(
      <View>
        <Image source={image} />
      </View>
    )
    try {
      (async function() {
        await CameraRoll.saveToCameraRoll('GET','photo');
      })();
    } catch (e) {}
  }

  console.log('ggg', ProductItem)

    const {params} = props;
    const {uri} = params
    return (
      <View style={{flex: 1}}>
        <Text style={styles.headerStyle}>History</Text>
        <View style={{alignItems: 'center', marginTop: 10,}}>
          {/*<ScrollView>*/}
          {/*  <View>*/}
          {/*    {[*/}
          {/*      {image1: uri},*/}
          {/*    ].map((e, index) => (*/}
          {/*      <View key={index.toString()}>*/}
          {/*        <ProductItem*/}
          {/*        image={e.image1}*/}
          {/*        />*/}
          {/*      </View>*/}

          {/*    ))}*/}
          {/*  </View>*/}
          {/*</ScrollView>*/}
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

import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from "react-native";
import accountData from "../Components/AccountScreenData";
import styles from "./Styles/AccountScreenInfoListStyle";

export default function AccountScreenInfoList(props) {

  const {params} = props;
  const {uri} = params;

  function renderItems({item}) {
    return (
      <TouchableOpacity style={{ backgroundColor: "blue"}}>
        <Image source={item.data.uri} style={styles.imageStyle} />
      </TouchableOpacity>
    );
  }


  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.headerStyle}>History</Text>
      <FlatList
        data={accountData}
        renderItem={renderItems}
        style={{ marginTop: 5, width: 150, height: 200 }}
        keyExtractor={(item, index) => index.toString()}
      />
      {/*<ScrollView>*/}
      {/*  <View>*/}
      {/*    {[*/}
      {/*      {image1: uri},*/}
      {/*    ].map((e, index) => (*/}
      {/*      <View key={index.toString()}>*/}
      {/*      </View>*/}
      {/*    ))}*/}
      {/*  </View>*/}
      {/*</ScrollView>*/}
    </View>
  );
}

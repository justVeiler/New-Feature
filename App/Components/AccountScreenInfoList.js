import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import styles from "./Styles/AccountScreenInfoListStyle";

export default function AccountScreenInfoList(props) {
  const { uri } = props;
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.headerStyle}>History</Text>
      <FlatList
        data={[props]}
        renderItem={() => (
          <TouchableOpacity>
            <Image source={[uri]} style={styles.imageStyle} />
          </TouchableOpacity>
        )}
        style={{ marginTop: 5 }}
      />
    </View>
  );
}

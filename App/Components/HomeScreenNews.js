import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, TouchableHighlight} from 'react-native';
import {navigate} from '../Navigation/RootNavigation';
import styles from "./Styles/HomeScreenNewsStyle";
import newsData from "./HomeScreenNewsData";

function renderItem({ item, }) {
  // const { route } = props;
  // const { params } = route;
  // const [show, setShow] = useState(true)

  return (
    <TouchableOpacity style={styles.itemStyle} key={item.key} >
      <Text style={styles.headerText}>{item.header}</Text>
      <Text style={styles.descText}>{item.desc}</Text>
      <Text style={styles.contentText}>{item.content}</Text>
    </TouchableOpacity>
  );
}

export default function HomeScreenNews(props) {
  // const {route} = props;
  // const {params} = route

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.headerStyle}>News</Text>
      <FlatList
        data={newsData}
        keyExtractor={item => item.key}
        renderItem={ renderItem
          // ({item}) =>
          // <View>
          // <TouchableOpacity onPress={() => navigate('DetailScreen', {id: item.id})}>
          //   <Text>{item.header}</Text>
          // </TouchableOpacity>
          //   {/*<Text>{item.desc}</Text>*/}
          //   {/*<Text>{item.content}</Text>*/}
          // </View>
        }
        style={{ marginTop: 5 }}
      />
    </View>
  );
}

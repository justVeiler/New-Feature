import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, TouchableHighlight} from 'react-native';
import {navigate} from '../Navigation/RootNavigation';
import newsData from '../Components/HomeScreenNewsData';

function renderItem({ item, }) {
  // const { route } = props;
  // const { params } = route;
  // const [show, setShow] = useState(true)

  return (
    <View  key={item.id} >
      <Text>{item.header}</Text>
      <Text>{item.desc}</Text>
      <Text>{item.content}</Text>
    </View>
  );
}

export default function DetailScreen(props) {
  const {route} = props;
  const {params} = route

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={newsData}
        keyExtractor={item => item.id}
        renderItem={({item}) =>
          <View>
              <Text>{route.params.header}</Text>
            {/*<Text>{item.desc}</Text>*/}
            {/*<Text>{item.content}</Text>*/}
          </View>
        }
        style={{ marginTop: 5 }}
      />
    </View>
  );
}

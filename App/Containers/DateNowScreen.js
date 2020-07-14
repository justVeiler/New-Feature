import React, {Component, useEffect, useState} from 'react';

import { StyleSheet, View, Alert, Text } from 'react-native';

export default function DateNowScreen(){

  const [date, setDate] = useState('');

  useEffect(() =>{
    const date = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();

    setDate([date + '/' + month + '/' + year]);
  }, [])

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          marginLeft: 10
        }}>
        <Text
          style={{
            fontSize: 20,
            marginTop: 16,
          }}>
          {date}
        </Text>
      </View>
    );

}


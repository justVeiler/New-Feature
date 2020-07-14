import React, { Component } from 'react';

import { StyleSheet, View, Alert, Text } from 'react-native';

export default class DateNowScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  componentDidMount() {
    const date = new Date().getDate(); //Current Date
    const month = new Date().getMonth() + 1; //Current Month
    const year = new Date().getFullYear(); //Current Year

    this.setState({
      date:
        date + '/' + month + '/' + year,
    });
  }

  render() {
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
          {this.state.date}
        </Text>
      </View>
    );
  }
}


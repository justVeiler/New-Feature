import React, { Component } from 'react';

import { StyleSheet, View, Alert, Text } from 'react-native';

export default class DateNowScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //defauilt value of the date time
      date: '',
    };
  }
  componentDidMount() {
    const that = this;

    const date = new Date().getDate(); //Current Date
    const month = new Date().getMonth() + 1; //Current Month
    const year = new Date().getFullYear(); //Current Year
    const hours = new Date().getHours(); //Current Hours
    const min = new Date().getMinutes(); //Current Minutes
    const sec = new Date().getSeconds(); //Current Seconds

    that.setState({
      //Setting the value of the date time
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
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
          }}>
          Current Date Time
        </Text>
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


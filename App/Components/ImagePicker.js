import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class Camera extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
    };
  }
  chooseFile = () => {
    const options = {
      title: 'Select Image',
      customButtons: [
        {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        this.setState({
          filePath: response,
        });
      }
    });
  };
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.container}>
            <Image
                source={{
                  uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
                }}
                style={{ width: 100, height: 100 }}
            />
            <Image
                source={{ uri: this.state.filePath.uri }}
                style={{ width: 250, height: 250 }}
            />
            <Text style={{ alignItems: 'center' }}>
              {this.state.filePath.uri}
            </Text>
            <Button title="Choose File" onPress={this.chooseFile.bind(this)} />
          </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
import ImagePicker from "react-native-image-picker";
import { navigate } from "../Navigation/RootNavigation";
import React from "react";

export default class ImagePicking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {}
    };
  }

  handlePress = () => {
    const options = {
      title: "Select Image",
      customButtons: [
        { name: "customOptionKey", title: "Choose Photo from Custom Option" }
      ],
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };
    ImagePicker.showImagePicker(options, response => {
      // console.log("Response = ", response);
      const { uri } = response;
      // console.log("URI", uri);
      navigate("ImagePickingScreen", { uri: uri });
      if (response.didCancel) {
        console.log("User cancelled image picker");
        navigate("HomeScreen");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
        alert(response.customButton);
      } else {
        this.setState({
          filePath: { uri: response.uri }
        });
      }
    });
  };
}

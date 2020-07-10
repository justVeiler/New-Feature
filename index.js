/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App/Containers/App";
import { name as appName } from "./app.json";
let express = require("express");
let app = express();
let formidable = require('express')


AppRegistry.registerComponent(appName, () => App);

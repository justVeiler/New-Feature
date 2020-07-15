import axios from "axios";
import * as qs from "query-string";

import {
  API_ENDPOINT,
  APP_ID,
  APP_SECRET,
  APP_VERSION_CODE,
  GOOGLE_API_KEY,
  GOOGLE_MAP_API_ENDPOINT,
  REQUEST_TIME_OUT,
  STATUS_BAD_REQUEST,
  STATUS_INTERNAL_SERVER_ERROR,
  STATUS_OK,
  STATUS_UNAUTHORIZED
} from "../../Config/Remote";
import TimeHelper from "../../Common/TimeHelper";

const traces = {};

const instance = axios.create({
  baseURL: API_ENDPOINT,
  timeout: REQUEST_TIME_OUT,
  headers: {
    "App-Id": APP_ID,
    "App-Secret": APP_SECRET,
    "App-Version": APP_VERSION_CODE
  }
});

const handleSuccess = response => {
  console.log(
    "END:",
    response.config.url,
    TimeHelper.formatDateTime(
      TimeHelper.nowInTimestamp(),
      "DD/MM/YYYY HH:mm:ss"
    )
  );
  if (STATUS_OK === response.status) {
    console.log("SUCCESS RESPONSE:", response);
    return response.data;
  } else {
    console.log("200 ERROR RESPONSE:", response);
    throw new Error(response);
  }
};

const handleError = error => {
  console.log("ERROR URL:", error.config.url);
  console.log("ERROR RESPONSE:", error.response);
  console.log("ERROR API:", error);
  console.log(
    "END:",
    TimeHelper.formatDateTime(
      TimeHelper.nowInTimestamp(),
      "DD/MM/YYYY HH:mm:ss"
    )
  );

  const lang = instance.defaults.headers.common["Lang"]
    ? instance.defaults.headers.common["Lang"]
    : "vi";
  const message = "";

  if (error.response) {
    const { status, data } = error.response;
    if (status !== 401) {
    }
    if (status === STATUS_INTERNAL_SERVER_ERROR) {
      return {
        status: false,
        data: "Mã lỗi " + status,
        message: message,
        code: status
      };
    } else {
      if (status === STATUS_UNAUTHORIZED) {
        // StoreHelper.dispatchLogout();
      }
      return {
        status: false,
        data: data,
        message: data.message,
        code: status
      };
    }
  }
  return {
    status: false,
    message: message,
    error: error,
    code: 500
  };
};

const GET = (url, config = {}, params = {}) => {
  Object.keys(params).forEach(function(key) {
    if (typeof params[key] == "boolean") {
      params[key] = params[key] === true ? 1 : 0;
    }
  });
  const queryString = qs.stringify(params);
  // const signature = generateSignature(params);
  instance.defaults.headers.common["Signature"] = "";
  console.log(
    "START:",
    url,
    TimeHelper.formatDateTime(
      TimeHelper.nowInTimestamp(),
      "DD/MM/YYYY HH:mm:ss"
    )
  );
  return instance
    .get(url + "?" + queryString, config)
    .then(handleSuccess)
    .catch(handleError);
};

const POST = (url, params, config = {}) => {
  // const signature = generateSignature(params);
  // instance.defaults.headers.common["Signature"] = signature;

  console.log(
    "START:",
    url,
    TimeHelper.formatDateTime(
      TimeHelper.nowInTimestamp(),
      "DD/MM/YYYY HH:mm:ss"
    )
  );
  return instance
    .post(url, params, config)
    .then(handleSuccess)
    .catch(handleError);
};

const PUT = (url, params, config = {}) => {
  // const signature = generateSignature(params);
  // instance.defaults.headers.common["Signature"] = signature;
  console.log(
    "START:",
    url,
    TimeHelper.formatDateTime(
      TimeHelper.nowInTimestamp(),
      "DD/MM/YYYY HH:mm:ss"
    )
  );
  return instance
    .put(url, params, config)
    .then(handleSuccess)
    .catch(handleError);
};

const DELETE = (url, config = {}) => {
  console.log(
    "Config",
    config,
    "START:",
    url,
    TimeHelper.formatDateTime(
      TimeHelper.nowInTimestamp(),
      "DD/MM/YYYY HH:mm:ss"
    )
  );
  return instance
    .delete(url, config)
    .then(handleSuccess)
    .catch(handleError);
};

const API = {
  uploadImage: image => {
    const formData = new FormData();
    formData.append("image", {
      uri: image.uri,
      type: image.type,
      name: image.fileName
    });
    const path = "image";
    return POST(path, formData);
  }
};
export default API;

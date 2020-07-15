import initialState, { AppReducers } from "../ReduxHooks/AppReducers";
import React, { createContext, useReducer } from "react";
import { AppActions } from "../ReduxHooks/AppActions";
import { LocalStorage } from "../Lib/LocalStorage";
import API from "../Lib/API/API";

export const AppContext = createContext({});
export const AppProvider = AppContext.Provider;

export default function Wrapper(props) {
  const [state, dispatch] = useReducer(AppReducers, initialState);
  const actions = mapActionsToDispatch(state, dispatch);

  return (
    <AppProvider value={{ state, dispatch, ...actions }}>
      {props.children}
    </AppProvider>
  );
}

const uploadImages = (state, dispatch) => async (
  image,
  onSuccess,
  onFailed
) => {
  const response = await API.uploadImage(image);
  if (response.status === true) {
    console.log("SUCCESS");
    onSuccess(response);
  } else {
    onFailed(response);
  }
  await dispatch({
    type: AppActions.uploadImage,
    payload: image
  });
};

const loadSavedImages = (state, dispatch) => async () => {
  const savedImages = JSON.parse(await LocalStorage.get("savedImages", "[]"));
  // console.log("SAVED IMAGES", savedImages);
  await dispatch({ type: AppActions.loadSavedImages, payload: savedImages });
};

const mapActionsToDispatch = (state, dispatch) => {
  return {
    uploadImages: uploadImages(state, dispatch),
    loadSavedImages: loadSavedImages(state, dispatch)
  };
};

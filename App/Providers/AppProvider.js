import initialState, { AppReducers } from "../ReduxHooks/AppReducers";
import React, { createContext, useReducer } from "react";
import { AppActions } from "../ReduxHooks/AppActions";
import { LocalStorage } from "../Lib/LocalStorage";

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

const saveImage = (state, dispatch) => async data => {
  const savedImagesInLocalStorage = JSON.parse(
    await LocalStorage.get("savedImages", "[]")
  );

  console.log("IN STORAGE", savedImagesInLocalStorage);
  savedImagesInLocalStorage.unshift(data);
  await LocalStorage.set(
    "savedImages",
    JSON.stringify(savedImagesInLocalStorage)
  );
  await dispatch({ type: AppActions.saveImage, payload: data });
};

const loadSavedImages = (state, dispatch) => async () => {
  const savedImages = JSON.parse(await LocalStorage.get("savedImages", "[]"));
  console.log("SAVED IMAGES", savedImages);
  await dispatch({ type: AppActions.loadSavedImages, payload: savedImages });
};

const mapActionsToDispatch = (state, dispatch) => {
  return {
    saveImage: saveImage(state, dispatch),
    loadSavedImages: loadSavedImages(state, dispatch)
  };
};

import initialState, { AppReducers } from "../ReduxHooks/AppReducers";
import React, { createContext, useReducer } from "react";
import { AppActions } from "../ReduxHooks/AppActions";

export const AppContext = createContext({});
export const AppProvider = AppContext.Provider;

export default function Wrapper(props) {
  const [state, dispatch] = useReducer(AppReducers, initialState);
  const actions = mapActionsToDispatch(dispatch);

  return (
    <AppProvider value={{ state, dispatch, ...actions }}>
      {props.children}
    </AppProvider>
  );
}

const saveImage = dispatch => async data => {
  console.log("DATA", data);
  dispatch({ type: AppActions.saveImage, payload: data });
  return data;
};

const mapActionsToDispatch = dispatch => {
  return {
    saveImage: saveImage(dispatch)
  };
};

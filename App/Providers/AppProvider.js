import initialState, { AppReducers } from "../ReduxHooks/AppReducers";
import React, { createContext, useContext, useReducer } from "react";
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

const uploadHistory = dispatch => async data => {
  console.log("DISPATCHed");
  await dispatch({ type: AppActions.uploadHistory, payload: data });
  return console.log("DATA", data);
};

const mapActionsToDispatch = dispatch => {
  return {
    uploadHistory: uploadHistory(dispatch)
  };
};

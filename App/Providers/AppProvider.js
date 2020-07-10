import initialState, { AppReducer } from "../ReduxHooks/AppReducers";
import React, { createContext, useReducer } from "react";
import {AppActions, AuthActions} from '../ReduxHooks/AppActions';

export const AppContext = createContext({});
export const AppProvider = AppContext.Provider;

export default function Wrapper(props) {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const actions = mapActionsToDispatch(dispatch);

  return (
    <AppProvider value={{ state, dispatch, ...actions }}>
      {props.children}
    </AppProvider>
  );
}

const uploadHistory = dispatch => async (): void => {
  const { data } = response;
  console.log(data);
  dispatch({type:AppActions.uploadHistory, payload : imageSource})
};

const mapActionsToDispatch = dispatch => {
  return {
    uploadHistory: uploadHistory(dispatch)
  };
};

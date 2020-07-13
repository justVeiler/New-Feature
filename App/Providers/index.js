import React, {createContext, useReducer} from 'react';
import uri from 'rn-fetch-blob/utils/uri';
import {LocalStorage} from '../Lib/LocalStorage';
import {AuthAction} from '../ReduxHooks/AuthActions';

const ContextProviderComposer = ({ contextProviders, children }) => {
  return contextProviders.reduceRight(
    (children, parent, index) => React.cloneElement(parent, { children }),
    children
  );
};

export const AuthContext = createContext({})
export const AuthProvider = AuthContext.Provider;

export default function Provider(props) {
  return (
    <ContextProviderComposer contextProviders={[]} children={props.children} />
  );
}

const saveImage = dispatch => async (uri, onSuccess, onFail): void => {
 const response = await LocalStorage.set('uri', uri)
 if (response !== null) {
   const {Data} = response;
   const {uri} = Data;
   console.log('here', uri)
  onSuccess(uri)
 }else {
   onFail()
 }
  dispatch({
    type: AuthAction.saveImage,
    payload: uri
  })
}

const mapActionsToDispatch = dispatch => {
return {
  saveImage: saveImage(dispatch)
}
}

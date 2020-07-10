import { AppActions } from "./AppActions";

export const initialState = {
  imageSource: ""
};

export const AppReducers = (state, action) => {
  if (action.type === AppActions.uploadHistory) {
    const data = action.payload;
    return { ...state, data: data };
  } else {
    return state;
  }
};

export default initialState;

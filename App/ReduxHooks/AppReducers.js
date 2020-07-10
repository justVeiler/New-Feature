import { AppActions } from "./AppActions";

export const initialState = {
  imageSource: ""
};

export const AppReducers = (state, action) => {
  if (action.type === AppActions.uploadHistory) {
    const imageSource = action.payload;
    return { ...state, imageSource: imageSource };
  } else {
    return state;
  }
};

export default initialState;

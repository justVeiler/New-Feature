import { AppActions } from "./AppActions";

export const initialState = {
  images: []
};

export const AppReducers = (state, action) => {
  if (action.type === AppActions.saveImage) {
    const uri = action.payload;
    const newImages = [...state.images];
    newImages.unshift(uri);
    return { ...state, images: newImages };
  } else {
    return state;
  }
};

export default initialState;

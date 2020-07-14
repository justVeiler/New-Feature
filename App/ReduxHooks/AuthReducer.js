import { AuthAction } from "./AuthActions";

export const initialState = {
  photos: []
};

export const AuthReducer = (state, action) => {
  if (action.type === AuthAction.saveImage) {
    const uri = action.payload;
    return { ...state, uri: uri };
  } else {
    return state;
  }
};

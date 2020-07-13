import { AppActions } from "./AppActions";

export const initialState = {
  data: {}
};

export const AppReducers = (state, action) => {
  if (action.type === AppActions.saveImage) {
    const data = action.payload;
    return { ...state, data: data };
  } else {
    return state;
  }
};

export default initialState;

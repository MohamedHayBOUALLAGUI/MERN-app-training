import { TOGGLE_FALSE, TOGGLE_TRUE } from "../Constants/contactActionTypes";

const InitialState = {
  edit: false,
};

export const editReducer = (state = InitialState, { type }) => {
  switch (type) {
    case TOGGLE_TRUE:
      return { ...state, edit: true };
    case TOGGLE_FALSE:
      return { ...state, edit: false };
    default:
      return state;
  }
};

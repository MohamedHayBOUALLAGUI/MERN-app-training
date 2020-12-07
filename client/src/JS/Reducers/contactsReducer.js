import {
    GET_ALL_USERS,
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_LOAD,
  GET_USER
} from "../Constants/contactActionTypes";

const InitialState = {
  contacts: [],
  loadContacts: false,
  errors: null,
  userr:{}
};

export const contactsReducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_USERS_LOAD:
      return { ...state, loadContacts: true };
    case GET_ALL_USERS:
      return { ...state, contacts: payload.response, loadContacts: false };
    case GET_ALL_USERS_FAIL:
      return { ...state, loadContacts: false, errors: payload };
      case GET_USER:
      return { ...state, userr:payload};

    default:
      return state;
  }
};

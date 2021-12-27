import {
  GET_ALL_USERS_FAILED,
  GET_ALL_USERS,
  GET_ALL_USERS_SUCCESS,
} from "JS/ActionTypes/userActionTypes";

const initialState = {
  loading: false,
  users: null,
  errors: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_USERS:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: payload,
      };

    case GET_ALL_USERS_FAILED:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    default:
      return state;
  }
};

export default userReducer;

import { USER_UPDATE_SUCCESS } from "JS/ActionTypes/userActionTypes";
import { GET_ID_USER } from "JS/ActionTypes/userActionTypes";
import { GET_ID_USER_FAILED } from "JS/ActionTypes/userActionTypes";
import { GET_ID_USER_SUCCESS } from "JS/ActionTypes/userActionTypes";
import { USER_UPDATE_FAILED } from "JS/ActionTypes/userActionTypes";
import { USER_UPDATE } from "JS/ActionTypes/userActionTypes";
import {
  GET_ALL_USERS_FAILED,
  GET_ALL_USERS,
  GET_ALL_USERS_SUCCESS,
  AUTH_ERRORS,
  GET_AUTH_USER,
  USER_LOADING,
  USER_LOGIN,
  USER_REGISTER,
  LOGOUT,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
  GET_AUTH_USER_FAILED,
  GET_AUTH_USER_SUCCESS,
} from "JS/ActionTypes/userActionTypes";

const initialState = {
  loading: false,
  users: null,
  currentUser:null,
  errors: null,
  isAuth: false,
  token: localStorage.getItem("token"),
  msg: null,
  userPosts: null,
  userById:null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_USERS:
      case USER_REGISTER:
        case USER_LOGIN:
          case USER_UPDATE:
          case GET_AUTH_USER:
            case GET_ID_USER:
      return {
        ...state,
        loading: true,
      };

      case USER_REGISTER_SUCCESS:
        case USER_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        ...payload,
        isAuth: true, // token ,msg
      };
      case USER_LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);

      return {
        ...state,
        loading: false,
        ...payload,
        error: null,
        isAuth: true, // token ,msg
      };
      case GET_AUTH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser:payload,

        isAuth: true, // token ,msg
      };
      case GET_ID_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          userPosts:payload.user.posts,
          userById:payload,
  
          isAuth: true, // token ,msg
        };

    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        // isAuth : true,
        users: payload,
      };
      
      case USER_REGISTER_FAILED:
        case USER_UPDATE_FAILED:
        case USER_LOGIN_FAILED:
        case GET_AUTH_USER_FAILED:
          case GET_ID_USER_FAILED:
          return {
            ...state,
            loading: false,
            error: payload,
            isAuth: false, // token ,msg
          };

    case GET_ALL_USERS_FAILED:
      return {
        ...state,
        loading: false,
        errors: payload,
      };

      case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
      };
      
    default:
      return state;
  }
};

export default userReducer;

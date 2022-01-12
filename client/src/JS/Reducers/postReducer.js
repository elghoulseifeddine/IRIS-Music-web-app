import {
    GET_POST,
    GET_POST_FAILED,
    GET_POST_SUCCESS,
    POST_REGISTER,
    POST_REGISTER_FAILED,
    POST_REGISTER_SUCCESS,
    POST_UPDATE,
    POST_UPDATE_FAILED,
    POST_UPDATE_SUCCESS,
    DELETE_POST_FAILED,
    DELETE_POST_SUCCESS,
    DELETE_POST,
  
    } from "../ActionTypes/postActionTypes";
  
  const initialState = {
    loading: false,
    currentPost:null,
    errors: null,
    msg: null,
    isAuth: false,
    token: localStorage.getItem("token"),
  };
  
  const postReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case POST_UPDATE:
      case POST_REGISTER:
          case DELETE_POST:
            case GET_POST:
        return {
          ...state,
          loading: true,
        };
  
        case POST_REGISTER_SUCCESS:
            case POST_UPDATE_SUCCESS:
        return {
          ...state,
          loading: false,
          ...payload,
          isAuth:true,
        };

        case DELETE_POST_SUCCESS:
            return {
              ...state,
              loading: false,
              ...payload,
              isAuth:true,
            };

        case GET_POST_SUCCESS:
        return {
          ...state,
          loading: false,
          currentPost:payload,
        };
        
        case POST_REGISTER_FAILED:
          case GET_POST_FAILED:
              case POST_UPDATE_FAILED:
                  case DELETE_POST_FAILED:
            return {
              ...state,
              loading: false,
              error: payload,
              isAuth: false,
            };
        
      default:
        return state;
    }
  };
  
  export default postReducer;
  
import {
    GET_ALL_USERS,
    GET_ALL_USERS_FAILED,
    GET_ALL_USERS_SUCCESS,
  } from "../ActionsTypes/userActionType";
  import axios from "axios";
  
  export const getAllUsers = () => async (dispatch) => {
    dispatch({ type: GET_ALL_USERS });
  
    try {
      const res = await axios.get("/user/getUsers");
  
      dispatch({ type: GET_ALL_USERS_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_ALL_USERS_FAILED, payload: error.res });
    }
  };
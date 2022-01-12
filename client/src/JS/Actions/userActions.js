import {
    GET_ALL_USERS,
    GET_ALL_USERS_FAILED,
    GET_ALL_USERS_SUCCESS,
    AUTH_ERRORS,
  GET_AUTH_USER,
  GET_AUTH_USER_FAILED,
  GET_AUTH_USER_SUCCESS,
  LOGOUT,
  USER_LOADING,
  USER_LOGIN,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
  USER_REGISTER,
  USER_REGISTER_FAILED,
  USER_REGISTER_SUCCESS,
  USER_UPDATE,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILED,
  GET_ID_USER,
  GET_ID_USER_SUCCESS,
  GET_ID_USER_FAILED,
  } from "../ActionTypes/userActionTypes";
  import axios from "axios";

   /********************** get all users ******************** */
  
  export const getAllUsers = () => async (dispatch) => {
    dispatch({ type: GET_ALL_USERS });
  
    try {
      const res = await axios.get("/user/getUsers");
  
      dispatch({ type: GET_ALL_USERS_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_ALL_USERS_FAILED, payload: error.res });
    }
  };

  /********************** User register action creator ******************** */

export const register = (formData) => async (dispatch) => {
  dispatch({ type: USER_REGISTER });

  try {
 
    const res = await axios.post("/user/add-user", formData);

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: res.data, // {msg:"user registered",token}
    });
  } catch (error) {
    console.dir(error);
    dispatch({
      type: USER_REGISTER_FAILED,
      payload: error.response.data,
    });
  }
};

/********************** User update action creator ******************** */

export const updateUser = ({ description, instrument, rating, genre,image},id) => async (dispatch) => {
  dispatch({ type: USER_UPDATE });

  try {

    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
        "content-type": 'multipart/form-data' 
      },
    };
    
    const formData = new FormData();
    formData.append("description", description);
    formData.append("instrument", instrument);
    formData.append("rating", rating);
    formData.append("genre", genre);
    formData.append("image", image);
   

    const res = await axios.put(`/user/update-user/${id}`, formData,config);

    dispatch({
      type: USER_UPDATE_SUCCESS,
      payload: res.data, // {msg:"user updated",token}
    });
  } catch (error) {
    console.dir(error);
    dispatch({
      type: USER_UPDATE_FAILED,
      payload: error.response.data,
    });
  }
};

/********************** Login action creator *********************** */

export const login = (formData) => async (dispatch) => {
  dispatch({ type: USER_LOGIN });

  try {
    const res = await axios.post("/user/login-user", formData);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: res.data, //{msg:"user logged",token}
    });

    localStorage.setItem("token", res.data.token);
  } catch (error) {
    console.dir(error);

    dispatch({
      type: USER_LOGIN_FAILED,
      payload: error.response.message.data,
    });
  }
};

/********************** Logout action creator *********************** */

export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

/********************** get current user *********************** */

export const getAuthUser = () => async (dispatch) => {
  dispatch({
    type: GET_AUTH_USER,
  });
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };

  try {
    const res = await axios.get("/user/current-user", config);

    // console.log(res.data)
    dispatch({
      type: GET_AUTH_USER_SUCCESS,
      payload: res.data, //{user:req.user}
    });
  } catch (error) {
    console.dir(error.response);
    dispatch({
      type: GET_AUTH_USER_FAILED,
      payload: error.response.data,
    });
  }
};

/********************** get user by id*********************** */

export const getUserById = (id) => async (dispatch) => {
  dispatch({
    type: GET_ID_USER,
  });
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };

  try {
    const res = await axios.get(`/user/get-user/${id}`, config);

    dispatch({
      type: GET_ID_USER_SUCCESS,
      payload: res.data, 
    });
  } catch (error) {
    console.dir(error.response);
    dispatch({
      type: GET_ID_USER_FAILED,
      payload: error.response.data,
    });
  }
};
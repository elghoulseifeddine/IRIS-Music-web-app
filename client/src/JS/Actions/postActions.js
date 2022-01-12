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
  DELETE_POST,
  DELETE_POST_FAILED,
  DELETE_POST_SUCCESS,
} from "../ActionTypes/postActionTypes";
import axios from "axios";

// /********************** get all users ******************** */

// //   export const getAllUsers = () => async (dispatch) => {
// //     dispatch({ type: GET_ALL_USERS });

// //     try {
// //       const res = await axios.get("/user/getUsers");

// //       dispatch({ type: GET_ALL_USERS_SUCCESS, payload: res.data });
// //     } catch (error) {
// //       dispatch({ type: GET_ALL_USERS_FAILED, payload: error.res });
// //     }
// //   };

/********************** Post register action creator ******************** */

export const registerPost = (formData) => async (dispatch) => {
  dispatch({ type: POST_REGISTER });
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };

  try {
    const res = await axios.post("/post/addPost", formData, config);

    dispatch({
      type: POST_REGISTER_SUCCESS,
      payload: res.data, // {msg:"Post registered",token}
    });
  } catch (error) {
    console.dir(error);
    dispatch({
      type: POST_REGISTER_FAILED,
      payload: error.response.data,
    });
  }
};

/********************** Post delete action creator ******************** */

export const deletePost = (id) => async (dispatch) => {
    dispatch({ type: DELETE_POST });
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
  
    try {
      const res = await axios.delete(`/post/deletePost/${id}`, config);
  
      dispatch({
        type: DELETE_POST_SUCCESS,
        payload: res.data, // {msg:"Post deleted",token}
      });
    } catch (error) {
      console.dir(error);
      dispatch({
        type: DELETE_POST_FAILED,
        payload: error.response.data,
      });
    }
  };

/********************** Post update action creator ******************** */

export const updatePost = (formData,id) => async (dispatch) => {
  dispatch({ type: POST_UPDATE });
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.put(`/post/updatePost/${id}`, formData,config);

    dispatch({
      type: POST_UPDATE_SUCCESS,
      payload: res.data, // {msg:"Post updated",token}
    });
  } catch (error) {
    console.dir(error);
    dispatch({
      type: POST_UPDATE_FAILED,
      payload: error.response.data,
    });
  }
};

/********************** get post by id*********************** */

export const getPost = (id) => async (dispatch) => {
  dispatch({
    type: GET_POST,
  });
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };

  try {
    const res = await axios.get(`/post/currentPost/${id}`, config);

    // console.log(res.data)
    dispatch({
      type: GET_POST_SUCCESS,
      payload: res.data, //{user:req.user}
    });
  } catch (error) {
    console.dir(error.response);
    dispatch({
      type: GET_POST_FAILED,
      payload: error.response.data,
    });
  }
};

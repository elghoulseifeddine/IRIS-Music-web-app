// import {
//   GET_PROFILE,
//   GET_PROFILE_FAILED,
//   GET_PROFILE_SUCCESS,
//   PROFILE_REGISTER,
//   PROFILE_REGISTER_FAILED,
//   PROFILE_REGISTER_SUCCESS,
//   PROFILE_UPDATE,
//   PROFILE_UPDATE_FAILED,
//   PROFILE_UPDATE_SUCCESS,
// } from "../ActionTypes/profileActionTypes";
// import axios from "axios";

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

// /********************** Profile register action creator ******************** */

// export const registerProfile = (formData) => async (dispatch) => {
//   dispatch({ type: PROFILE_REGISTER });
//   const config = {
//     headers: {
//       authorization: localStorage.getItem("token"),
//     },
//   };

//   try {
//     // const config={
//     //     headers:{
//     //         "x-auth":
//     //     }
//     // }
//     const res = await axios.post("/profile/addProfile", formData, config);

//     dispatch({
//       type: PROFILE_REGISTER_SUCCESS,
//       payload: res.data, // {msg:"PROFILE registered",token}
//     });
//   } catch (error) {
//     console.dir(error);
//     dispatch({
//       type: PROFILE_REGISTER_FAILED,
//       payload: error.response.data,
//     });
//   }
// };

// /********************** Profile update action creator ******************** */

// // export const updateProfile = (formData) => async (dispatch) => {
// //   dispatch({ type: PROFILE_UPDATE });

// //   try {
// //     // const config={
// //     //     headers:{
// //     //         "x-auth":
// //     //     }
// //     // }
// //     const res = await axios.put(`/profile/updateProfile/:${formaData.userId}`, formData);

// //     dispatch({
// //       type: PROFILE_UPDATE_SUCCESS,
// //       payload: res.data, // {msg:"PROFILE updated",token}
// //     });
// //   } catch (error) {
// //     console.dir(error);
// //     dispatch({
// //       type: PROFILE_UPDATE_FAILED,
// //       payload: error.response.data,
// //     });
// //   }
// // };

// /********************** get current profile *********************** */

// export const getProfile = (id) => async (dispatch) => {
//   dispatch({
//     type: GET_PROFILE,
//   });
//   const config = {
//     headers: {
//       authorization: localStorage.getItem("token"),
//     },
//   };

//   try {
//     const res = await axios.get(`/profile/currentProfile/:${id}`, config);

//     // console.log(res.data)
//     dispatch({
//       type: GET_PROFILE_SUCCESS,
//       payload: res.data, //{user:req.user}
//     });
//   } catch (error) {
//     console.dir(error.response);
//     dispatch({
//       type: GET_PROFILE_FAILED,
//       payload: error.response.data,
//     });
//   }
// };

// export const getAllProfiles = () => async (dispatch) => {
//   try {
//     const res = await axios.get("profile/getProfile");

//     dispatch({ type: "GET ALL PROFILE", payload: res.data });
//   } catch (error) {
//     console.log("get profile error", error);
//   }
// };

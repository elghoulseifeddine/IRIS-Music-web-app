// import {
//     GET_PROFILE,
//     GET_PROFILE_FAILED,
//     GET_PROFILE_SUCCESS,
  
//     PROFILE_REGISTER,
//     PROFILE_REGISTER_FAILED,
//     PROFILE_REGISTER_SUCCESS,
  
//     PROFILE_UPDATE,
//     PROFILE_UPDATE_FAILED,
//     PROFILE_UPDATE_SUCCESS,
  
//     } from "../ActionTypes/profileActionTypes";
  
//   const initialState = {
//     loading: false,
//     currentProfile:null,
//     errors: null,
//     msg: null,
//     isAuth: false,
//     token: localStorage.getItem("token"),
//   };
  
//   const profileReducer = (state = initialState, { type, payload }) => {
//     switch (type) {
//         case PROFILE_UPDATE:
//       case PROFILE_REGISTER:
//             case GET_PROFILE:
//         return {
//           ...state,
//           loading: true,
//         };
  
//         case PROFILE_REGISTER_SUCCESS:
//             case PROFILE_UPDATE_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           ...payload,
//           isAuth:true,
//         };
//         case GET_PROFILE_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           currentProfile:payload,
//         };
        
//         case PROFILE_REGISTER_FAILED:
//           case GET_PROFILE_FAILED:
//               case PROFILE_UPDATE_FAILED:
//             return {
//               ...state,
//               loading: false,
//               error: payload,
//               isAuth: false,
//             };

//            case "GET ALL PROFILE" : return {
//              ...state,
//              loading : false ,
//              ...payload
//            } 
        
//       default:
//         return state;
//     }
//   };
  
//   export default profileReducer;
  
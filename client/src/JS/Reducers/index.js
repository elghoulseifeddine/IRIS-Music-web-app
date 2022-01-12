import { combineReducers } from "redux";
import userReducer from "./userReducer";
import postReducer from "./postReducer";
// import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
  userReducer,postReducer,
});

export default rootReducer;
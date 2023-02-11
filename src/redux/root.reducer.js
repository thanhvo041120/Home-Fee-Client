import userReducer from "./slices/user.slice";
import notifyReducer from "./slices/notify.slice";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  auth: userReducer,
  notify: notifyReducer,
});

import userReducer from './slices/user.slice';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
    auth: userReducer,
});

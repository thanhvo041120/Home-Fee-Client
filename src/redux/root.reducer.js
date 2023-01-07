import userReducer from './slices/auth.slice';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
    auth: userReducer,
});

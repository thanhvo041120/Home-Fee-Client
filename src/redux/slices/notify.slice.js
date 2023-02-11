import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "",
  message: "",
  hasNotify: false
};

const notifySlice = createSlice({
  name: "notify",
  initialState: initialState,
  reducers: {
    setNotify(state, action) {
      state.type = action.payload.type;
      state.message = action.payload.message;
      state.hasNotify = action.payload.hasNotify;
    },
    clear(state) {
      Object.assign(state, initialState);
    },
  },
});

export const {  setNotify, clear } = notifySlice.actions;
export default notifySlice.reducer;

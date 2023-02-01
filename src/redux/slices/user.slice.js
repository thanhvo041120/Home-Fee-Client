import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  email: "",
  id: "" | 0,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.isLogin = true;
    },
    logout(state) {
      Object.assign(state, initialState);
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

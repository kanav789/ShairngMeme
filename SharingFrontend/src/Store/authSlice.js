import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  status: false,
  userdata: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authlogin: (state, action) => {
      state.status = true;
      state.userdata = action.payload.userdata;
    },
    logout: (state) => {
      state.status = false;
    },
  },
});
export const { authlogin, logout } = authSlice.actions;
export default authSlice.reducer;

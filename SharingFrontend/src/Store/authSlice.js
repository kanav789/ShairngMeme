import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  status: localStorage.getItem("authStatus") === "true" || false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authlogin: (state) => {
      state.status = true;
      localStorage.setItem("authStatus", state.status);
    },
    logout: (state) => {
      state.status = false;
      localStorage.removeItem("authStatus", state.status);
    },
  },
});
export const { authlogin, logout } = authSlice.actions;
export default authSlice.reducer;

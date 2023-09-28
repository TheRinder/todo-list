import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";

interface AuthState {
  token: string | null;
  loading: boolean;
}

const localStorageToken: string | null = localStorage.getItem("token") || null;

const initialState: AuthState = {
  token: localStorageToken,
  loading: !!localStorageToken,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setFaikToken: (state, action: PayloadAction<string>) => {
      state.token = "fake_token";
    },
  },
  extraReducers: (builder) => {},
});

export const { setFaikToken } = authSlice.actions;

export const selectAuthState = (state: RootState) => state.auth;

export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    storedUsername: "",
    storedPassword: "",
    isLogged: false
}

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        login: (state, action) => {
            state.storedUsername = action.payload.username;
            state.storedPassword = action.payload.password;
            state.isLogged = true;
        },
        logout: (state) => {
            state.isLogged = false;
        }
    }
})

export interface LoginState {
    username: string;
    password: string;
}


export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
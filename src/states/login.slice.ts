import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    storedUsername: "foo",
    storedPassword: "bar",
    isLogged: false
}

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        login: (state, action) => {
            const { username, password } = action.payload;
            const { storedPassword, storedUsername } = state;
            if (username === storedUsername && password === storedPassword) {
                state.isLogged = true;
            }
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
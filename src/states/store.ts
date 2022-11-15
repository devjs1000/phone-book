import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./login.slice";

const store = configureStore({
    reducer: {
        login: loginSlice
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


export default store;
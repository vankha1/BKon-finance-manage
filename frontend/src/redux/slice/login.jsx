import { createSlice } from "@reduxjs/toolkit";


const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLoggin: false,
        isValidAcc: false
    },
    reducers: {
        login: (state, action) => {
            state.isLoggin = true;
            state.isValidAcc = true;
        },
        logout: (state, action) => {
            state.isLoggin = false;
        },
        inValidAcc: (state, action) => {
            state.isValidAcc = false;
        }
    }
})

export const { login, logout, inValidAcc } = loginSlice.actions;

export default loginSlice
import { configureStore } from "@reduxjs/toolkit";
import localeSlice from "./slice/locale";
import loginSlice from "./slice/login";
import debtSlice from "./slice/debts";

const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
        locale: localeSlice.reducer,
        debt: debtSlice.reducer
    }
})

export default store;
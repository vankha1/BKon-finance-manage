import { configureStore } from "@reduxjs/toolkit";
import localeSlice from "./slice/locale";

const store = configureStore({
    reducer: {
        locale: localeSlice.reducer
    }
})

export default store;
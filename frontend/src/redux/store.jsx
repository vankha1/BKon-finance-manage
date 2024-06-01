import { configureStore } from "@reduxjs/toolkit";
import localeSlice from "./slice/locale";
import loginSlice from "./slice/login";
import debtSlice from "./slice/debts";
import receivableSlice from "./slice/receivables";
import transactionSlice from "./slice/transactions";

const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
        locale: localeSlice.reducer,
        debt: debtSlice.reducer,
        receivable: receivableSlice.reducer,
        transaction: transactionSlice.reducer,
    }
})

export default store;
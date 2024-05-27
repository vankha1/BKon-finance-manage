import { createSlice } from "@reduxjs/toolkit";

const debtSlice = createSlice({
  name: "debts",
  initialState: {
    listDebts: false,
  },
  reducers: {
    addDebt: (state, action) => {
      state.listDebts = action.payload.value;
    },
  },
});

export const { addDebt } = debtSlice.actions;

export default debtSlice;

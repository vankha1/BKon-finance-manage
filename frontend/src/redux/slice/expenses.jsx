import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expenses",
  initialState: {
    listReceivables: [],
  },
  reducers: {
    assignReceivables: (state, action) => {
      state.listReceivables = action.payload.value;
    },
    updateReceivables: (state, action) => {
      if (action.payload != "") {
        state.listReceivables = [
          ...state.listReceivables,
          action.payload?.value,
        ];
      }
    },
  },
});

export const { assignReceivables, updateReceivables } = expenseSlice.actions;

export default expenseSlice;

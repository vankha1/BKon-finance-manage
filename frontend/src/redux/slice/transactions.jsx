import { createSlice } from "@reduxjs/toolkit";

const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    isChanged: false,
  },
  reducers: {
    toggleEvent: (state, action) => {
      state.isChanged = action.payload.value;
    },
  },
});

export const { toggleEvent } = transactionSlice.actions;

export default transactionSlice;

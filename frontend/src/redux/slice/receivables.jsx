import { createSlice } from "@reduxjs/toolkit";

const receivableSlice = createSlice({
  name: "receivables",
  initialState: {
    curReceivables: 0,
  },
  reducers: {
    payReceivables: (state, action) => {
      state.curReceivables = action.payload.value;
    },
  },
});

export const { payReceivables } = receivableSlice.actions;

export default receivableSlice;

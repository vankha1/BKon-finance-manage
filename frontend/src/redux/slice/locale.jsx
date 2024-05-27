import { createSlice } from "@reduxjs/toolkit";

const localeSlice = createSlice({
  name: "locale",
  initialState: {
    locale: "",
  },
  reducers: {
    updateLocale: (state, action) => {
      state.locale = action.payload.value;
    },
  },
});

export const { updateLocale } = localeSlice.actions;

export default localeSlice;

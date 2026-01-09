import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    chcheResults: (state, action) => {
      state = { ...action.payload, ...action };
    },
  },
});

export const { chcheResults } = searchSlice.actions;

export default searchSlice.reducer;

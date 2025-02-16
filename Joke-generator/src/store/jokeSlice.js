import { createSlice } from "@reduxjs/toolkit";

const jokeSlice = createSlice({
  name: "joke",
  initialState: [],
  reducers: {
    addJoke: (state, action) => {
      return action.payload;
    },
  },
});

export const jokeSliceActions = jokeSlice.actions;
export default jokeSlice;

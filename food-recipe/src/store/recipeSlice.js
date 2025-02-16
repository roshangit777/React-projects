import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
  name: "recipe",
  initialState: [],
  reducers: {
    addRecipe: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const recipeSliceAction = recipeSlice.actions;
export default recipeSlice;

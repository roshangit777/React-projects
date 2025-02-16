import { createSlice } from "@reduxjs/toolkit";

const catagoryRecipeSlice = createSlice({
  name: "catagoryRecipe",
  initialState: {
    recipe: [],
  },
  reducers: {
    addCatagoryRecipe: (state, action) => {
      state.recipe = action.payload;
    },
  },
});

export const catagoryRecipeSliceAction = catagoryRecipeSlice.actions;
export default catagoryRecipeSlice;

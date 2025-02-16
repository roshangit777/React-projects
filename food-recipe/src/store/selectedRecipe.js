import { createSlice } from "@reduxjs/toolkit";
const persistedRecipe =
  JSON.parse(sessionStorage.getItem("selectedRecipe")) || null; // this is to store in session memory
const selectedRecipeSlice = createSlice({
  name: "selectedRecipe",
  initialState: persistedRecipe,
  reducers: {
    filterItem: (state, action) => {
      return action.payload;
    },
  },
});
export const selectedRecipeSliceAction = selectedRecipeSlice.actions;
export default selectedRecipeSlice;

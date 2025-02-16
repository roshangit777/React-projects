import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./recipeSlice";
import selectedRecipeSlice from "./selectedRecipe";
import CatagorySlice from "./catagorySlice";
import catagoryRecipeSlice from "./catagoryRecipeSlice";

const recipeStore = configureStore({
  reducer: {
    recipe: recipeSlice.reducer,
    selectedRecipe: selectedRecipeSlice.reducer,

    catagory: CatagorySlice.reducer,
    catagoryRecipe: catagoryRecipeSlice.reducer,
  },
});

export default recipeStore;

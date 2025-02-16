import { createSlice } from "@reduxjs/toolkit";

const selectedCat = JSON.parse(sessionStorage.getItem("catagory") || null);
const CatagorySlice = createSlice({
  name: "catagory",
  initialState: selectedCat,
  reducers: {
    getCat: (state, action) => {
      return action.payload;
    },
  },
});

export const CatagorySliceAction = CatagorySlice.actions;
export default CatagorySlice;

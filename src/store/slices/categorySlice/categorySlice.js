import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  // initialState: 'Action',
  initialState: {},
  reducers: {
    setCategory: (state, action) => {
      console.log("Dispatched category", action);
      return action.payload;
    },
  },
});
export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
      state.push(action.payload); 
    },
    removeFromWishlist: (state, action) => {
      return state.filter((movie) => movie.id !== action.payload.id); // Remove the movie from the wishlist
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
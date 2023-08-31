import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      // Check if the movie with the same Title is already in the wishlist
      const existingMovie = state.movies.find(
        (movie) => movie.Title === action.payload.Title
      );

      if (!existingMovie) {
        // If it's not in the wishlist, add it
        state.movies.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      // Remove the movie from the wishlist by filtering based on Title
      // state.movies = state.movies.filter(
      //   (movie) => movie.Title !== action.payload.Title
      // );
      state.wishlist = state.wishlist.filter(
        (movie) => movie.Title !== action.payload.Title
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;

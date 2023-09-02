import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  movies: [], // RESOLVED: This name was 'data'.
  status: 'idle',
  error: null,
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      // Check if the movie with the same Title is already in the wishlist
      const existingMovie = state.movies.find(
        (movie) => movie?.Title === action.payload?.Title
      );

      if (!existingMovie) {
        // If it's not in the wishlist, add it
        state.movies.push(action.payload);
      }
    },

    removeFromWishlist: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie?.Title !== action.payload?.Title
      );
    },
  },
});

// Create an async thunk for the POST request
// export const postTodo = createAsyncThunk(
//   'addToWishList/postTodo',
//   async (newTodo) => {
//     try {
//       const response = await axios.post(
//         'http://localhost:8080/wishList',
//         newTodo
//       ); // Change the endpoint to match your Express.js backend
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   }
// );

// const todosSlice = createSlice({
//   name: 'todos',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(postTodo.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(postTodo.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.data.push(action.payload); // Add the new todo to the state
//       })
//       .addCase(postTodo.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default {
  // todos: todosSlice.reducer,
  wishlist: wishlistSlice.reducer,
};

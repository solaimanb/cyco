import { createSlice } from '@reduxjs/toolkit';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

// const initialState = {
//   movies: [],
//   status: 'idle',
//   error: null,
// };
const [axiosSecure] = useAxiosSecure();

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: [],
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

export const postWishList = createAsyncThunk('wishlist', async (newWish) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/wishlist`,
      newWish
    ); // Change the endpoint to match your Express.js backend
    return response.data;
  } catch (error) {
    throw error;
  }
});

// export const postWishList = createAsyncThunk('wishlist', async (newWish) => {
//   try {
//     const response = await axiosSecure.post('/wishlist', newWish);
//     console.log('wishListSlice, line-50:', response);
//   } catch (error) {
//     throw error;
//   }
// });

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

// export default {
//   todos: todosSlice.reducer,
//   wishlist: wishlistSlice.reducer,
// };

export default wishlistSlice.reducer;

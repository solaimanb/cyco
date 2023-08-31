import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './homeSlice/homeSlice';
import userReducer from './userSlice/userSlice';
import wishlistReducer from './wishListSlice/wishListSlice'; // Renamed the reducer

const store = configureStore({
  reducer: {
    home: homeSlice,
    users: userReducer,
    wishlist: wishlistReducer, // Updated the reducer key name to 'wishlist'
  },
});

export default store;

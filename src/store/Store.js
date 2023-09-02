import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './homeSlice/homeSlice';
import userReducer from './userSlice/userSlice';
import todosSlice from './wishListSlice/wishListSlice';

const store = configureStore({
  reducer: {
    home: homeSlice,
    users: userReducer,
    wishlist: todosSlice // Updated the reducer key name to 'wishlist'
  },
});

export default store;
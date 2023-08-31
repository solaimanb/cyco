import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slices/categorySlice/categorySlice';
import homeSlice from './slices/homeSlice/homeSlice';
import userReducer from './slices/userSlice/userSlice';
import wishlistReducer from './slices/wishListSlice/wishListSlice';

const store = configureStore({
  reducer: {
    home: homeSlice,
    users: userReducer,
    wishlist: wishlistReducer,
    category: categoryReducer,
  },
});

export default store;

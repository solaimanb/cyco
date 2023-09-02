import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slices/categorySlice/categorySlice';
import homeSlice from './slices/homeSlice/homeSlice';
import userReducer from './slices/userSlice/userSlice';
import wishlistReducer from './slices/wishListSlice/wishListSlice';
import paymentReducer from './slices/paymentSlice/paymentSlice';

const store = configureStore({
  reducer: {
    home: homeSlice,
    users: userReducer,
    wishlist: wishlistReducer,
    category: categoryReducer,
    payment: paymentReducer,
  },
});

export default store;

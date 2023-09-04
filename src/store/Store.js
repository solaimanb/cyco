import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slices/categorySlice/categorySlice';
import homeSlice from './slices/homeSlice/homeSlice';
import paymentReducer from './slices/paymentSlice/paymentSlice';
import userReducer from './slices/userSlice/userSlice';
import wishlistReducer from './slices/wishListSlice/wishListSlice';
import mediaReducer from './slices/mediaSlice/mediaSlice';

const store = configureStore({
  reducer: {
    home: homeSlice,
    users: userReducer,
    category: categoryReducer,
    payment: paymentReducer,
    wishlist: wishlistReducer,
    // wishlist: todosSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

});

export default store;

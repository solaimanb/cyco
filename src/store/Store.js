import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slices/categorySlice/categorySlice';
import homeSlice from './slices/homeSlice/homeSlice';
import paymentReducer from './slices/paymentSlice/paymentSlice';
import userReducer from './slices/userSlice/userSlice';
import historyReducer from './slices/historySlice/historySlice';
// import wishlistReducer from './slices/wishlistSlice/wishlistSlice';

const store = configureStore({
  reducer: {
    home: homeSlice,
    users: userReducer,
    category: categoryReducer,
    payment: paymentReducer,
    history: historyReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;

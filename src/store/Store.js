import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slices/categorySlice/categorySlice';
import homeSlice from './slices/homeSlice/homeSlice';
import userReducer from './slices/userSlice/userSlice';
import wishlistReducer from './slices/wishListSlice/wishListSlice';
import mediaReducer from './slices/mediaSlice/mediaSlice';

const store = configureStore({
  reducer: {
    home: homeSlice,
    users: userReducer,
    wishlist: wishlistReducer,
    category: categoryReducer,
    media: mediaReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

});

export default store;

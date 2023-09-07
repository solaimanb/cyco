import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slices/categorySlice/categorySlice';
import forumTopicReducer from './slices/forumTopicSlice/forumTopicSlice';
import historyReducer from './slices/historySlice/historySlice';
import homeSlice from './slices/homeSlice/homeSlice';
import paymentReducer from './slices/paymentSlice/paymentSlice';
import searchReducer from './slices/searchSlice/searchSlice';
import userReducer from './slices/userSlice/userSlice';

const store = configureStore({
  reducer: {
    home: homeSlice,
    users: userReducer,
    category: categoryReducer,
    payment: paymentReducer,
    history: historyReducer,
    search: searchReducer,
    forumTopic: forumTopicReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;

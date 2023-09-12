import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slices/categorySlice/categorySlice';
import forumTopicReducer from './slices/forumTopicSlice/forumTopicSlice';
import homeSlice from './slices/homeSlice/homeSlice';
import paymentReducer from './slices/paymentSlice/paymentSlice';
import queriesReducer from './slices/queriesSlice/queriesSlice';
import searchReducer from './slices/searchSlice/searchSlice';
import userReducer from './slices/userSlice/userSlice';
import paymentHistorySlice from './slices/paymenthistorySlice/paymentHistorySlice';
import manageSubscriptionsSlice from './slices/subscriptionSlice/subscriptionSlice';

const store = configureStore({
  reducer: {
    home: homeSlice,
    users: userReducer,
    category: categoryReducer,
    payment: paymentReducer,
    search: searchReducer,
    forumTopic: forumTopicReducer,
    queries: queriesReducer,
    paymentHistory:paymentHistorySlice,
    manageSubscriptions:manageSubscriptionsSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;

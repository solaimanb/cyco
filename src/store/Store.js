import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import categoryReducer from './slices/categorySlice/categorySlice';
import forumTopicReducer from './slices/forumTopicSlice/forumTopicSlice';
import homeSlice from './slices/homeSlice/homeSlice';
import paymentReducer from './slices/paymentSlice/paymentSlice';
import paymentHistorySlice from './slices/paymenthistorySlice/paymentHistorySlice';
import queriesReducer from './slices/queriesSlice/queriesSlice';
import searchReducer from './slices/searchSlice/searchSlice';
import manageSubscriptionsSlice from './slices/subscriptionSlice/subscriptionSlice';
import userReducer from './slices/userSlice/userSlice';

const rootReducer = {
  home: homeSlice,
  users: userReducer,
  category: categoryReducer,
  payment: paymentReducer,
  search: searchReducer,
  forumTopic: forumTopicReducer,
  queries: queriesReducer,
  paymentHistory: paymentHistorySlice,
  manageSubscriptions: manageSubscriptionsSlice,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;

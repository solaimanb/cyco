// import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// import categoryReducer from "./slices/categorySlice/categorySlice";
// import commentReducer from "./slices/commentSlice/commentSlice";
// import editUserSlice from "./slices/editUserSlice/editUserSlice";
// import userSlice from "./slices/editUserSlice/passData";
// import forumTopicReducer from "./slices/forumTopicSlice/forumTopicSlice";
// import homeSlice from "./slices/homeSlice/homeSlice";
// import paymentReducer from "./slices/paymentSlice/paymentSlice";
// import paymentHistorySlice from "./slices/paymenthistorySlice/paymentHistorySlice";
// import queriesReducer from "./slices/queriesSlice/queriesSlice";
// import searchReducer from "./slices/searchSlice/searchSlice";
// import manageSubscriptionsSlice from "./slices/subscriptionSlice/subscriptionSlice";
// import userReducer from "./slices/userSlice/userSlice";

// const rootReducer = {
//   home: homeSlice,
//   users: userReducer,
//   category: categoryReducer,
//   payment: paymentReducer,
//   search: searchReducer,
//   forumTopic: forumTopicReducer,
//   paymentHistory: paymentHistorySlice,
//   manageSubscriptions: manageSubscriptionsSlice,
//   editUser: editUserSlice,
//   passData: userSlice,
//   queries: queriesReducer,
//   comments: commentReducer,
// };

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: [thunk],
// });
// Import dependencies from Redux Toolkit and middleware
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

// Import reducers from slices
import categoryReducer from "./slices/categorySlice/categorySlice";
import commentReducer from "./slices/commentSlice/commentSlice";
import editUserReducer from "./slices/editUserSlice/editUserSlice";
import userDataReducer from "./slices/editUserSlice/passData";
import forumTopicReducer from "./slices/forumTopicSlice/forumTopicSlice";
import homeReducer from "./slices/homeSlice/homeSlice";
import paymentReducer from "./slices/paymentSlice/paymentSlice";
import paymentHistoryReducer from "./slices/paymenthistorySlice/paymentHistorySlice";
import queriesReducer from "./slices/queriesSlice/queriesSlice";
import searchReducer from "./slices/searchSlice/searchSlice";
import manageSubscriptionsReducer from "./slices/subscriptionSlice/subscriptionSlice";
import userReducer from "./slices/userSlice/userSlice";

// Combine reducers
// const rootReducer = {
//   home: homeReducer,
//   users: userReducer,
//   category: categoryReducer,
//   payment: paymentReducer,
//   search: searchReducer,
//   forumTopic: forumTopicReducer,
//   paymentHistory: paymentHistoryReducer,
//   manageSubscriptions: manageSubscriptionsReducer,
//   editUser: editUserReducer,
//   passData: userDataReducer,
//   queries: queriesReducer,
//   comments: commentReducer,
// };

// Configure store
const store = configureStore({
  reducer: {
    home: homeReducer,
    users: userReducer,
    category: categoryReducer,
    payment: paymentReducer,
    search: searchReducer,
    forumTopic: forumTopicReducer,
    paymentHistory: paymentHistoryReducer,
    manageSubscriptions: manageSubscriptionsReducer,
    editUser: editUserReducer,
    passData: userDataReducer,
    queries: queriesReducer,
    comments: commentReducer,
  },
  middleware: [thunk],
});

// Export the configured store
export default store;

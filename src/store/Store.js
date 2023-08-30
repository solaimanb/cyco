import { configureStore, combineReducers } from '@reduxjs/toolkit';
import homeSlice from './homeSlice/homeSlice';
import userReducer from './userSlice/userSlice';
import wishListReducer from './wishListSlice/wishListSlice'



const rootReducer = combineReducers({
  users: userReducer,
  wishList: wishListReducer,
});



const store = configureStore({
  reducer: {
    home: homeSlice,
    rootReducer
  },
});

export default store;




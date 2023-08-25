import { configureStore, combineReducers } from '@reduxjs/toolkit';
import homeSlice from './homeSlice/homeSlice';
import userReducer from './userSlice/userSlice';



const rootReducer = combineReducers({
  user: userReducer,
});



const store = configureStore({
  reducer: {
    home: homeSlice,
    users: rootReducer,
  },
});

export default store;




// src/features/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';


import axios from 'axios';


// Action to get users
export const getUser = () => async (dispatch) => {
  try {
    const response = await axios.get(`${ import.meta.env.VITE_SERVER_URL }/users`);
    dispatch(setUsers(response.data));
  } catch (error) {
    console.error('Error getting users:', error);
  }
};

// Action to update an user
export const updateUserRequest = (id, updatedUser) => async (dispatch) => {
  try {
    const response = await axios.put(`${ import.meta.env.VITE_SERVER_URL }/users/${id}`, updatedUser);
    dispatch(updateUser(updatedUser));
    console.log('user profile updated successfully:', response.data.message);
  } catch (error) {
    console.error('Error updating user:', error);
  }
};
const initialState = {
  data: [],
  status: 'null',
  error: null,
};


// Create a slice
const editUserSlice = createSlice({
  name: 'editUser',
  initialState,
  reducers: {
    setUsers: (state, action) => {
     state.data = action.payload;
    },
    updateUser: (state, action) => {
      const updatedUser = action.payload;
      return state.map((user) =>
        user.id === updatedUser.id ? { ...user, ...updatedUser } : user
      );
    },
  },
  
});
export const { setUsers, updateUser } = editUserSlice.actions;
export default editUserSlice.reducer;

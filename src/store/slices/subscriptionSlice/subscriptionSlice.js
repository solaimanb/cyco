// usersSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

// Create an async thunk for fetching data (READ operation)
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('/api/users');
  return response.data;
});

// Create an async thunk for creating a new user (POST operation)
export const createUser = createAsyncThunk('users/createUser', async (userData) => {
  const response = await axios.post('/api/users', userData);
  return response.data;
});

// Create an async thunk for updating an existing user (UPDATE operation)
export const updateUser = createAsyncThunk('users/updateUser', async (userData) => {
  const response = await axios.put(`/api/users/${userData.id}`, userData);
  return response.data;
});

const subscriptionSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const updatedUser = action.payload;
        const index = state.users.findIndex((user) => user.id === updatedUser.id);
        if (index !== -1) {
          state.users[index] = updatedUser;
        }
      });
  },
});

export default subscriptionSlice.reducer;

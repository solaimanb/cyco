// src/features/todosSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; // You'll need axios or a similar library for making HTTP requests

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

// Create an async thunk for the POST request
export const postTodo = createAsyncThunk('addToWatchList/postTodo', async (newTodo) => {
  try {
    const response = await axios.post('http://localhost:8080/watchList', newTodo); // Change the endpoint to match your Express.js backend
    return response.data;
  } catch (error) {
    throw error;
  }
});

const todosSlice = createSlice({
  name: [],
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postTodo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(postTodo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.push(action.payload); // Add the new todo to the state
      })
      .addCase(postTodo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default todosSlice.reducer;

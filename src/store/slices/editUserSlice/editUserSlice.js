// src/features/todoSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';





export const getUser = createAsyncThunk('data/getUser', async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/getUser`); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
});
// src/features/dataSlice.js (continued)

export const updateUser = async ( id, roomData) => {
    console.log(id);
    const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/updateUserData/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(roomData),
    })
  
    const data = await response.json()
    return data
  }
  // ... (continued from previous code)
  
// Define an initial state
const initialState = {
    data: [],
    status: 'idle',
    error: null,
  };
// Create a slice
const editUserSlice = createSlice({
  name: 'editUser',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todos = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
    
  },
});
export const { addCase } = editUserSlice.actions;
export default editUserSlice.reducer;

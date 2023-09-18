// src/features/todoSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUser = createAsyncThunk('data/getUser', async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/getUser`
    ); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
});
// src/features/dataSlice.js (continued)

export const updateData = createAsyncThunk(
  'data/updateData',
  async ({ email, data }) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_SERVER_URL}/updateUserData/${email}`,
        data
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

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
      .addCase(updateData.fulfilled, (state, action) => {
        const updatedData = action.payload;
        const existingDataIndex = state.data.findIndex(
          (item) => item.email === updatedData.email
        );
        if (existingDataIndex !== -1) {
          state.data[existingDataIndex] = updatedData;
        }
      });
  },
});
export const { addCase } = editUserSlice.actions;
export default editUserSlice.reducer;

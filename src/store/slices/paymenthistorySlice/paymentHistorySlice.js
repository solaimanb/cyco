
// dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// Define an initial state
const initialState = {
  data: [],
  status: 'null',
  error: null,
};

// Create an async thunk to fetch data
export const fetchData = createAsyncThunk('/getPaymentHistory', async () => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/getPaymentHistory`); // Replace with your API endpoint
  const data = await response.json();
  return data;
});

// Create a data slice
const paymentHistorySlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default paymentHistorySlice.reducer;

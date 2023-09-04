
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define an async thunk for submitting media
export const submitMedia = createAsyncThunk('media/submit', async (formData) => {
  try {
    const response = await fetch('movies', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Error sending data to the backend');
    }

    return response.json(); 
  } catch (error) {
    throw new Error('Error sending data to the backend');
  }
});


const mediaSlice = createSlice({
  name: 'media',
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitMedia.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitMedia.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(submitMedia.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default mediaSlice.reducer;

// Import Axios and configure it with your base URL
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`, // Adjust the base URL as needed
});

export const saveCommentToDB = createAsyncThunk(
  'queries/saveComment',
  async ({ queryId, comment }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        `/forumQueries/${queryId}/comments`,
        {
          queryId,
          comment,
        }
      );

      return { success: response.data.success };
    } catch (error) {
      console.error('Error saving comment:', error);
      return rejectWithValue(error.message);
    }
  }
);

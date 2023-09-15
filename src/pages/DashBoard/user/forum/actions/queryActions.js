// Import Axios and configure it with your base URL
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`,
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

export const saveVoteToDB = async (queryId, voteType, newVoteCount) => {
  try {
    const response = await axiosInstance.post(`/forumQueries/${queryId}/vote`, {
      voteType,
      newVoteCount,
    });

    if (response.data.success) {
      return { success: true, message: 'Vote saved to the database.' };
    } else {
      return {
        success: false,
        message: 'Failed to save vote to the database.',
      };
    }
  } catch (error) {
    console.error('Error saving vote to the database:', error);
    return { success: false, message: 'Error saving vote to the database.' };
  }
};

export const removeVoteFromDB = async (queryId, voteType) => {
  try {
    const response = await axiosInstance.delete(
      `/forumQueries/votes/${queryId}`,
      {
        data: { voteType: voteType },
      }
    );

    if (response.data.success) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error removing vote from the database:', error);
    return false;
  }
};

// REMOVE QUERY OBJECT:
export const removeQueryObject = createAsyncThunk(
  'queries/removeQueryObject',
  async (queryId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`forumQueries/${queryId}`);

      if (response.data.success) {
        return queryId;
      } else {
        return rejectWithValue('Failed to delete query from the database.');
      }
    } catch (error) {
      console.error('Error removing query from the database:', error);
      return rejectWithValue(error.message);
    }
  }
);

import { createSlice } from '@reduxjs/toolkit';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const queriesSlice = createSlice({
  name: 'queries',
  initialState: [],
  reducers: {
    addQuery: (state, action) => {
      state.push(action.payload);
      console.log(state, action.payload);
    },
    incrementQueryView: (state, action) => {
      const { queryId } = action.payload;
      const queryToUpdate = state.find((query) => query._id === queryId);
      if (queryToUpdate) {
        queryToUpdate.views += 1;
      }
    },
    updateQueryViewsInDB: (state, action) => {
      const { queryId, updatedViews } = action.payload;
      const [axiosSecure] = useAxiosSecure();

      axiosSecure
        .put(`/forumQueries/${queryId}`, { views: updatedViews })
        .then((response) => {
          if (response.data.success) {
            //
          } else {
            //
          }
        })
        .catch((error) => {
          console.error('Error updating query views in the database:', error);
        });
    },
    updateViewCount: (state, action) => {
      const { queryId, updatedViews } = action.payload;

      const queryToUpdate = state.find((query) => query._id === queryId);

      if (queryToUpdate) {
        queryToUpdate.views === updatedViews;
      }
    },
    updateVoteCount: (state, action) => {
      const { queryId, updatedVoteCount } = action.payload;
      const queryToUpdate = state.find((query) => query._id === queryId);

      if (queryToUpdate) {
        queryToUpdate.voteCount = updatedVoteCount;
      }
    },
    removeQueryObject: (state, action) => {
      return state.filter((object) => object._id !== action.payload);
    },
  },
});

export const {
  addQuery,
  incrementQueryView,
  updateQueryViewsInDB,
  updateViewCount,
  updateVoteCount,
  removeQueryObject,
} = queriesSlice.actions;

export default queriesSlice.reducer;

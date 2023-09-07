import { createSlice } from '@reduxjs/toolkit';

const queriesSlice = createSlice({
  name: 'queries',
  initialState: [],
  reducers: {
    addQuery: (state, action) => {
      state.push(action.payload);
    },
    updateQueryViews: (state, action) => {
      const { queryId, viewCount } = action.payload;
      const queryToUpdate = state?.find((query) => query?.id === queryId);

      if (queryToUpdate) {
        queryToUpdate.views += viewCount;
      }
    },
  },
});

export const { addQuery, updateQueryViews } = queriesSlice.actions;
export default queriesSlice.reducer;

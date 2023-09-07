import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchQuery: '',
  filteredQueries: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    filterQueries: (state, action) => {
      const filteredQueries = state.filteredQueries.filter((query) =>
        query.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.filteredQueries = filteredQueries;
    },
  },
});

export const { updateSearchQuery, filterQueries } = searchSlice.actions;
export default searchSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchQuery: '',
  queries: [],
  filteredQueries: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.filteredQueries = [];
    },
    setQueries: (state, action) => {
      state.queries = action.payload;
    },
    filterQueries: (state, action) => {
      console.log('Search query', state.searchQuery);
      console.log('All queries', state.queries);
      const filteredQueries = state.queries.filter((query) =>
        query.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.filteredQueries = filteredQueries;
      console.log(filteredQueries);
    },
  },
});

export const { updateSearchQuery, setQueries, filterQueries } =
  searchSlice.actions;
export default searchSlice.reducer;

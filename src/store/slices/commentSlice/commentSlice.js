import { createSlice } from '@reduxjs/toolkit';

const commentSlice = createSlice({
  name: 'comments',
  initialState: {},
  reducers: {
    addComment: (state, action) => {
      console.log(state, action);
      const { queryId, comment } = action.payload;
      if (!state[queryId]) {
        state[queryId] = [];
      }
      state[queryId].push(comment);
    },
    loadComments: (state, action) => {
      const { queryId, comments } = action.payload;
      state[queryId] = comments;
    },
  },
});

export const { addComment, loadComments } = commentSlice.actions;
export default commentSlice.reducer;

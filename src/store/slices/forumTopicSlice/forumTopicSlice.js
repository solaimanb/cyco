import { createSlice } from '@reduxjs/toolkit';

const forumTopicSlice = createSlice({
  name: 'forumTopic',
  initialState: ' ',
  reducers: {
    setForumTopic: (state, action) => {
      // console.log('Dispatched topic-', action.payload);
      return action.payload;
    },
  },
});
// console.log(forumTopicSlice);

export const { setForumTopic } = forumTopicSlice.actions;
export default forumTopicSlice.reducer;

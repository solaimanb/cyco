import { createSlice } from '@reduxjs/toolkit';

const forumTopicSlice = createSlice({
  name: 'forumTopic',
  initialState: ' ',
  reducers: {
    setForumTopic: (state, action) => {
      console.log('Dispatched topic', action);
      return action.payload;
    },
  },
});

export const { setForumTopic } = forumTopicSlice.actions;
export default forumTopicSlice.payload;

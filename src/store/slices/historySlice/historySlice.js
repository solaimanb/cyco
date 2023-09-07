// historySlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  history: [],
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    pushToHistory: (state, action) => {
      state.history.push(action.payload);
    },
    popFromHistory: (state) => {
      state.history.pop();
    },
  },
});

export const { pushToHistory, popFromHistory } = historySlice.actions;

export default historySlice.reducer;

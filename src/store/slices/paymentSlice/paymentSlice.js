
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedPlan: null,
  amount: 0,
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    updateSelectedPlan: (state, action) => {
      state.selectedPlan = action.payload.selectedPlan;
      state.amount = action.payload.amount;
    },
  },
});

export const { updateSelectedPlan } = paymentSlice.actions;
export default paymentSlice.reducer;

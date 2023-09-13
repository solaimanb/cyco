// src/redux/itemsSlice.js
import { createSlice } from '@reduxjs/toolkit';

// src/redux/actions.js
import axios from 'axios';


// Action to fetch items
export const fetchItems = () => async (dispatch) => {
  try {
    const response = await axios.get(`${ import.meta.env.VITE_SERVER_URL }/getManageSubscriptions`);
    dispatch(setItems(response.data));
  } catch (error) {
    console.error('Error fetching items:', error);
  }
};

// Action to update an item
export const updateItemRequest = (id, updatedItem) => async (dispatch) => {
  try {
    const response = await axios.put(`${ import.meta.env.VITE_SERVER_URL }/updateManageSubscriptions/${id}`, updatedItem);
    dispatch(updateItem(updatedItem));
    console.log('Item updated successfully:', response.data.message);
  } catch (error) {
    console.error('Error updating item:', error);
  }
};
const initialState = {
  data: [],
  status: 'null',
  error: null,
};

const manageSubscriptionsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    setItems: (state, action) => {
      return action.payload;
    },
    updateItem: (state, action) => {
      const updatedItem = action.payload;
      return state.map((item) =>
        item.id === updatedItem.id ? { ...item, ...updatedItem } : item
      );
    },
  },
});

export const { setItems, updateItem } = manageSubscriptionsSlice.actions;
export default manageSubscriptionsSlice.reducer;

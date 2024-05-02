// src/redux/slices/contactsSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Define initial state for contacts
const initialContactsState = {
  contacts: [],
  isLoading: false,
  error: null,
}

// Create slice for contacts
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(action => action.type.endsWith('/pending'), state => {
        state.isLoading = true;
      })
      .addMatcher(action => action.type.endsWith('/fulfilled'), (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addMatcher(action => action.type.endsWith('/rejected'), (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  }
})

// Export actions
export const contactsReducer = contactsSlice.reducer;

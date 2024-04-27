// src/redux/slices/contactsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

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
    builder.addCase(fetchContacts.pending, state => {
      state.isLoading = true;
    })
   .addCase(fetchContacts.fulfilled, (state, action) => {
     state.isLoading = false;
     state.error = null;
      state.contacts = action.payload;
    })
   .addCase(fetchContacts.rejected, (state, action) => {
      state.isLoading = false;
        state.error = action.error.message;
        })
    },
});

// Export actions
export const contactsReducer = contactsSlice.reducer;
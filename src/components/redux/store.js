import { contactsSlice } from '../redux/contactsSlice';
import { filterSlice } from '../redux/filterSlice';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

// Combine your reducers
const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer
});


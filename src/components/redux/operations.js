// operations.js
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = `https://661fbcf116358961cd955120.mockapi.io/api/`;

export const fetchContacts = createAsyncThunk(
    'contacts/fetchcontacts',
    async (_,thunkAPI) => {
        try {
            const response = await axios.get('contacts');
            return response.data;
        }   catch (error) {
            return thunkAPI.rejectWithValue(error.message);//reject the promise with the error msg//
        }
    });
    
//async thunk for adding contact
export const addContacts = createAsyncThunk(
    'contacts/addContact',
    async (contactData,thunkAPI) => {
        try {
            const response = await axios.post('/contacts', contactData);
            return response.data;
        }   catch (error) {
            return thunkAPI.rejectWithValue(error.message);//reject the promise with the error msg//
        }
    });

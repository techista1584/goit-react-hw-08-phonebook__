import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import {
//     fetchingInProgress,
//     fetchingSuccess,
//     fetchingError
// } from "./contactsSlice";

axios.defaults.baseURL = `https://661fbcf116358961cd955120.mockapi.io/api/`;

// export const fetchContacts = () => async function (dispatch) {
//     try {
//         //load indicator//
//         dispatch(fetchingInProgress());
//         //HTTP Request//
//         const response = await axios.get('/contacts');
//         dispatch(fetchingSuccess(response.data));
//     } catch (error) {
//         dispatch(fetchingError(error.message))
//     }
// }

export const fetchContacts = createAsyncThunk('contacts/fetchcontacts', async(_,
    thunkAPI) => {
    try {
        const response = await axios.get('contacts');
        return response.data;
    }   catch (error) {
        return thunkAPI.rejectWithValue(error.message);//reject the promise with the error msg//
    }
    });

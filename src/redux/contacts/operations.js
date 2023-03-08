import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      console.log('res', res);
      return res.data;
    } catch (error) {
      console.log('thunkAPI', thunkAPI);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    const { name, number } = contact;
    try {
      const response = await axios.post('/contacts', { name, number });
      toast.success('Added successfully');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (ContactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${ContactId}`);
      toast.success('Deleted successfully');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (data, thunkAPI) => {
    const { name, number, id } = data;
    try {
      const response = await axios.patch(`/contacts/${id}`, { name, number });
      toast.success('Rewrited successfully');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

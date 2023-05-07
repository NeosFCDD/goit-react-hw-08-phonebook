import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (text, thunkAPI) => {
    try {
      const { data } = await axios.post("/contacts", text);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
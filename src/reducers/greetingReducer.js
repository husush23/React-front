import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchGreeting = createAsyncThunk('greet', async () => {
  const response = await axios.get('http://localhost:3000/random_greeting');
  const { greeting } = response.data;
  return greeting;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: '',
    loading: false, // Add a loading property to your initial state
  },

  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.fulfilled, (state, action) => ({
      ...state, // Spread the existing state
      loading: false, // Update the loading property
      greeting: action.payload,
    }));
  },
});

export { fetchGreeting };
export default greetingSlice.reducer;

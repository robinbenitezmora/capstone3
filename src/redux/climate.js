import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchClimate = createAsyncThunk('climate/fetchClimate', async (place) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?&appid=56cdd6a9ec3b0492107abe99f711937a&lang=EN&q=${place}`);
  const data = await response.json();
  return data;
});

export default fetchClimate;

import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchForecast = createAsyncThunk(
  'forecast/fetchForecast',
  async (location) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?&appid=56cdd6a9ec3b0492107abe99f711937a&lang=EN&q=${location}`
    );

    const data = await response.json();
    return data;
  }
);

export default fetchForecast;

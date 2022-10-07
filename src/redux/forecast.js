import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchForecast = createAsyncThunk('forecast/fetchForecast', async (place) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?&appid=56cdd6a9ec3b0492107abe99f711937a&lang=EN&q=${place}`
  );
  const climateData = await response.json();
  const forecast = climateData.list.filter((item) => item.dt_txt.includes('12:00:00'));
  return forecast;
});

export default fetchForecast;

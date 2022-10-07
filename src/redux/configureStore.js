import { configureStore } from '@reduxjs/toolkit';
import forecastReducer from './redux/forecast';
import climateReducer from './redux/climate';

const store = configureStore({
  reducer: {
    forecast: forecastReducer,
    climate: climateReducer,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import forecastReducer from './redux/forecast';
import climateReducer from './redux/climate';
import logger from 'redux-logger';

const Store = configureStore({
  reducer: {
    forecast: forecastReducer,
    climate: climateReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default Store;

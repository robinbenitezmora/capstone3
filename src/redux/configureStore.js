import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import forecastReducer from './forecast';
import climateReducer from './climate';

const Store = configureStore({
  reducer: {
    forecast: forecastReducer,
    climate: climateReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default Store;

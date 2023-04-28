import { configureStore } from '@reduxjs/toolkit';
import { countriesReducer } from './Countries/countriesSlice';
import detailsReducer from './Details/DetailsSlice';

export default configureStore({
  reducer: {
    countries: countriesReducer,
    details: detailsReducer,
  },
});

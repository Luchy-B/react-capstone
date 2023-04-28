import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const api = 'https://coronavirus.m.pipedream.net/';

export const fetchAllCountries = createAsyncThunk(
  'AllCountries/fetchData',
  async () => {
    const response = await fetch(api);
    const data = await response.json();
    return data;
  },
);

const initialState = {
  countries: [],
  status: 'idle',
  error: null,
};

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCountries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllCountries.fulfilled, (state, action) => {
        const { rawData } = action.payload;
        return { ...state, isLoading: false, countries: rawData };
      })
      .addCase(fetchAllCountries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const countriesReducer = countriesSlice.reducer;

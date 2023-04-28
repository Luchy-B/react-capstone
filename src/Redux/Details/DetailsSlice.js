import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const DetailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
});

export default DetailsSlice.reducer;

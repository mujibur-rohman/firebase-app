import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuth: false,
};

const user = createSlice({
  initialState,
  name: 'user',
  reducers: {},
});

export default user.reducer;

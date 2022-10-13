import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuth: false,
};

const user = createSlice({
  initialState,
  name: 'user',
  reducers: {
    login: (state, action) => {
      state.user = { ...action.payload };
      state.isAuth = true;
    },
  },
});

export const { login } = user.actions;

export default user.reducer;

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import api from '../api';

const FETCH_MOVIES = 'FETCH_MOVIES';
const initialState = [];

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_MOVIES}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export const fetchMovies = createAsyncThunk(FETCH_MOVIES, async () => {
  const response = await axios.get(api);
  return response.data.slice(0, 20);
});

export default moviesReducer;

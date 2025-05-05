// redux/productsSlice.js
// Import createAsyncThunk
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Use createAsyncThunk to create an async thunk
export const fetchWeather = createAsyncThunk('weather/fetch', async (zip) => {
  console.log('fetchWeather', zip)
  const apikey = import.meta.env.VITE_API_KEY
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=imperial`)
  return await res.json()
})

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weather: null,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // handle your thunk in extraReducers...
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.weather = action.payload
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default weatherSlice.reducer

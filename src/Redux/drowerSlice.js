import { createSlice } from '@reduxjs/toolkit'

export const drowerSlice = createSlice({
  name: 'drower',
  initialState: {
    drower: false,
    selected:[0,0]
  },
  reducers: {
    changeDrower: (state) => {
      state.drower =!state.drower
    },
    Home: (state)=>{
      state.selected=[1 , 0]
    },
    Setting: (state)=>{
      state.selected=[0 , 1]
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeDrower, Home, Setting } = drowerSlice.actions

export default drowerSlice.reducer
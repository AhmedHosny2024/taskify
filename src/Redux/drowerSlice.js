import { createSlice } from '@reduxjs/toolkit'

export const drowerSlice = createSlice({
  name: 'drower',
  initialState: {
    drower: false,
    selected:[1,0,0,0],
  },
  reducers: {
    changeDrower: (state) => {
      state.drower =!state.drower
    },
    Home: (state)=>{
      state.selected=[1 , 0,0,0]
    },
    Attendance: (state)=>{
      state.selected=[0 , 1,0,0]
    },
    Users: (state)=>{
      state.selected=[0 , 0,1,0]
    },
    Me: (state)=>{
      state.selected=[0 , 0,0,1]
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeDrower, Home, Attendance,Users,Me } = drowerSlice.actions

export default drowerSlice.reducer
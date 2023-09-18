import { createSlice } from '@reduxjs/toolkit'

export const IdsSlice = createSlice({
  name: 'Ids',
  initialState: {
    tasks:"",
    attendance:"",
    search:[0,0]
  },
  reducers: {
    settasks: (state,action) => {
      state.tasks =action.payload
      state.search =[1,0]
    },
    setattendance: (state,action) => {
        state.attendance =action.payload
        state.search =[0,1]
      },
    CancelUser:(state)=>{
      state.tasks =""
      state.tasks =""
      state.search =[0,0]
    }

  },
})

// Action creators are generated for each case reducer function
export const { settasks, setattendance,CancelUser } = IdsSlice.actions

export default IdsSlice.reducer
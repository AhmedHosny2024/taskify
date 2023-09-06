import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
  name: 'drower',
  initialState: {
    todo:[],
    inprogress:[],
    done:[]
  },
  reducers: {
    settodo: (state,action) => {
      state.todo =action.payload
    },
    setinprogress: (state,action) => {
        state.inprogress =action.payload
      },
    setdone: (state,action) => {
    state.done =action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { settodo, setinprogress, setdone } = dataSlice.actions

export default dataSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

export const newtaskSlice = createSlice({
  name: 'newtask',
  initialState: {
    addtodo: false,
    addinprogress: false,
    adddone: false,

  },
  reducers: {
    addnewtasktodo: (state) => {
      state.addtodo =!state.addtodo
      state.addinprogress =false
      state.adddone =false
    },
    addnewtaskinprogress: (state) => {
      state.addtodo =false
      state.addinprogress =!state.addinprogress
      state.adddone =false
    },
    addnewtaskdone: (state) => {
      state.addtodo =false
      state.addinprogress =false
      state.adddone =!state.adddone
    },
    closeall:(state)=>{
      state.addtodo =false
      state.addinprogress =false
      state.adddone =false
    }
  },
})

// Action creators are generated for each case reducer function
export const { addnewtasktodo,addnewtaskinprogress,addnewtaskdone,closeall } = newtaskSlice.actions

export default newtaskSlice.reducer
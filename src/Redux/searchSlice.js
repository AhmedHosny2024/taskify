import { createSlice } from '@reduxjs/toolkit'

export const seacrhSlice = createSlice({
  name: 'search',
  initialState: {
    searchState: false,
    val:"",
  },
  reducers: {
    changesearch: (state,action) => {
      state.searchState =action.payload
    },
    changeVale: (state,action)=>{
      state.val=action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changesearch, changeVale } = seacrhSlice.actions

export default seacrhSlice.reducer
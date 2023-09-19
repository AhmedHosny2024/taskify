import { createSlice } from '@reduxjs/toolkit'

export const seacrhSlice = createSlice({
  name: 'search',
  initialState: {
    searchState: false,
    val:"",
    userName:"",
    searchUser:false,
  },
  reducers: {
    changesearch: (state,action) => {
      state.searchState =action.payload
    },
    changeVale: (state,action)=>{
      state.val=action.payload
    },

    changeUserSearch: (state,action) => {
      state.searchUser =action.payload
    },
    changeUserName: (state,action)=>{
      state.userName=action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { changesearch, changeVale ,changeUserSearch,changeUserName} = seacrhSlice.actions

export default seacrhSlice.reducer
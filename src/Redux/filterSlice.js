import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter:false,
    filterState:[0,0,0],
    category:[0,0,0,0],
    staues:[0,0,0],
    dudate:[0,0,0],
    startDate:null,
    endDate:null,
  },
  reducers: {
    changeFilter: (state) => {
      state.filter =!state.filter
    },
    category: (state,action)=>{
      state.category[action.payload]=!state.category[action.payload]
    },
    staues: (state,action)=>{
      state.staues[action.payload]=!state.staues[action.payload]

    },
    dudate: (state,action)=>{
        state.dudate[action.payload]=!state.dudate[action.payload]

      },
    changestate: (state,action)=>{
    state.filterState[action.payload]=!state.filterState[action.payload]
    if(action.payload===1){
      state.startDate=null
      state.endDate=null
    }
    },
    setStart: (state,action)=>{
      state.startDate=action.payload
      },
    setEnd: (state,action)=>{
      state.endDate=action.payload
      },
  },
})

// Action creators are generated for each case reducer function
export const {changestate, changeFilter, category, staues, dudate ,setStart,setEnd} = filterSlice.actions

export default filterSlice.reducer
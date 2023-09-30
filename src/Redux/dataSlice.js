import { createSlice } from '@reduxjs/toolkit'
const  initatial={
  drower: false,
  selected:[1,0,0,0],

  addtodo: false,
  addinprogress: false,
  adddone: false,
  myname:"",
  searchState: false,
  val:"",
  userName:"",
  searchUser:false,

  filter:false,
  filterState:[0,0,0],
  category:[0,0,0,0],
  staues:[0,0,0],
  dudate:[0,0,0],
  startDate:null,
  endDate:null,

  drag:0,
  type:0,
  MyId:0,
  dep:0,
  role:"",
  lastid:0,
  name:"",
  today:[],
  yesterday:[],

  tasks:"",
  attendance:"",
  search:[0,0],

  todo:[],
  inprogress:[],
  done:[],

  roles:[],
  departments:[]
}
export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    drower: false,
    selected:[1,0,0,0],
    myname:"",
    addtodo: false,
    addinprogress: false,
    adddone: false,

    searchState: false,
    val:"",
    userName:"",
    searchUser:false,

    filter:false,
    filterState:[0,0,0],
    category:[0,0,0,0],
    staues:[0,0,0],
    dudate:[0,0,0],
    startDate:null,
    endDate:null,

    drag:0,
    type:0,
    MyId:0,
    dep:0,
    role:"",
    lastid:0,
    name:"",
    today:[],
    yesterday:[],

    tasks:"",
    attendance:"",
    search:[0,0],

    todo:[],
    inprogress:[],
    done:[],

    roles:[],
    departments:[]
  },
  reducers: {
    resetState: (state) => initatial,
    setlastId: (state,action) => {
      state.lastid =action.payload
    },
    stmyname: (state,action) => {
      state.myname =action.payload
    },
    setname: (state,action) => {
      state.name =action.payload
    },
    setrole: (state,action) => {
      state.role =action.payload
    },
    setdep: (state,action) => {
      state.dep =action.payload
    },
    setroles: (state,action) => {
      state.roles =action.payload
    },
    setdeps: (state,action) => {
        state.departments =action.payload
      },

    settodo: (state,action) => {
      state.todo =action.payload
    },
    setinprogress: (state,action) => {
        state.inprogress =action.payload
      },
    setdone: (state,action) => {
    state.done =action.payload
    },
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
    },
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
    changeDrag: (state,action) => {
      state.drag =action.payload
    },
    SetMyId: (state,action) => {
      state.MyId =action.payload
    },
    SetToday: (state,action) => {
      state.today =action.payload
    },
    SetYesterday: (state,action) => {
      state.yesterday =action.payload
    },
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
    },
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
export const { settodo, setinprogress, setdone,changeDrower,
   Home, Attendance,Users,Me ,
   changesearch, changeVale ,changeUserSearch,changeUserName,
   SetMyId,changeDrag,SetToday,SetYesterday,
   settasks, setattendance,CancelUser,
   changestate, changeFilter, category, staues, dudate ,setStart,setEnd,
   addnewtasktodo,addnewtaskinprogress,addnewtaskdone,closeall,
   setroles,setdeps,
   resetState,setlastId,setdep,setrole,setname,stmyname
  } = dataSlice.actions

export default dataSlice.reducer
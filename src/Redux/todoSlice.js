import { createSlice } from '@reduxjs/toolkit'
export const todoSlice = createSlice({
  name: 'lists',
  initialState: {
      drag:0,
      type:0,
      todo:[{
        id:"1",
        category:"1 intern",
        title:"Finish the website",
        disc:"According to the brief required, we have a lot of features to implement, so this task should be finished by this week maximum, so we can start another task the next week."
      },
      {
        id:"2",
      category:"2 intern",
      title:"Finish the website",
      disc:"According to the brief required, we have a lot of features to implement, so this task should be finished by this week maximum, so we can start another task the next week."
      
      },
      {
        id:"3",
      category:"3 intern",
      title:"Finish the website",
      disc:"According to the brief required, we have a lot of features to implement, so this task should be finished by this week maximum, so we can start another task the next week."
      
      }
      ],
      inprogress:[{
        id:"4",
        category:"1 intern",
        title:"Finish the website",
        disc:"According to the brief required, we have a lot of features to implement, so this task should be finished by this week maximum, so we can start another task the next week."
      },
      {
        id:"5",
      category:"2 intern",
      title:"Finish the website",
      disc:"According to the brief required, we have a lot of features to implement, so this task should be finished by this week maximum, so we can start another task the next week."
      
      },
      {
        id:"6",
      category:"3 intern",
      title:"Finish the website",
      disc:"According to the brief required, we have a lot of features to implement, so this task should be finished by this week maximum, so we can start another task the next week."
      
      }
      ],
      done:[{
        id:"7",
        category:"1 intern",
        title:"Finish the website",
        disc:"According to the brief required, we have a lot of features to implement, so this task should be finished by this week maximum, so we can start another task the next week."
      },
      {
        id:"8",
      category:"2 intern",
      title:"Finish the website",
      disc:"According to the brief required, we have a lot of features to implement, so this task should be finished by this week maximum, so we can start another task the next week."
      
      },
      {
        id:"9",
      category:"3 intern",
      title:"Finish the website",
      disc:"According to the brief required, we have a lot of features to implement, so this task should be finished by this week maximum, so we can start another task the next week."
      
      }
      ]
  },
  reducers: {
    changeDrag: (state,action) => {
        state.drag =action.payload
      },
    addInTodoIndex: (state,action) => {
      state.todo.splice(action.payload[0], 0, action.payload[1])
    },
    addInTodo: (state,action) => {
        state.todo =state.todo.push(action.payload)
      },
    removeInTodo:(state,action)=>{
        state.dragEle=state.todo.splice(action.payload, 1)
    },
    addInInProcessIndex: (state,action) => {
        state.inprogress.splice(action.payload[0], 0, action.payload[1])
      },
    addInProcess: (state,action) => {
        state.inprogress =state.inprogress.push(action.payload)
    },
    removeInInProcess:(state,action)=>{
        state.dragEle=state.inprogress.splice(action.payload, 1)        
    },
    addInDoneIndex: (state,action) => {
        state.done.splice(action.payload[0], 0, action.payload[1])
      },
    addInDone: (state,action) => {
        state.done =state.done.push(action.payload)
        },
    removeInDone:(state,action)=>{
        state.dragEle=state.done.splice(action.payload, 1)
    },
},
})

// Action creators are generated for each case reducer function
export const { changeDrag,addInTodoIndex,addInTodo,removeInTodo,addInInProcessIndex,addInProcess,removeInInProcess,addInDoneIndex,addInDone,removeInDone } = todoSlice.actions

export default todoSlice.reducer
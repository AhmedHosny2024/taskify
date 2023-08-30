import { createSlice } from '@reduxjs/toolkit'
export const todoSlice = createSlice({
  name: 'lists',
  initialState: {
      drag:0,
      type:0,
      todo:[{
        category:"intern",
        title:"Finish the website",
        disc:"According to the brief required, we have a lot of features to implement, so this task should be finished by this week maximum, so we can start another task the next week."
      },
      {
      category:"intern",
      title:"Finish the website",
      disc:"According to the brief required, we have a lot of features to implement, so this task should be finished by this week maximum, so we can start another task the next week."
      
      },
      {
      category:"intern",
      title:"Finish the website",
      disc:"According to the brief required, we have a lot of features to implement, so this task should be finished by this week maximum, so we can start another task the next week."
      
      }
      ],
      inprogress:[{
        category:"intern",
        title:"Finish the website",
        disc:"According to the brief required, we have a lot of features to implement, so this task should be finished by this week maximum, so we can start another task the next week."
      },
      {
      category:"intern",
      title:"Finish the website",
      disc:"According to the brief required, we have a lot of features to implement, so this task should be finished by this week maximum, so we can start another task the next week."
      
      },
      {
      category:"intern",
      title:"Finish the website",
      disc:"According to the brief required, we have a lot of features to implement, so this task should be finished by this week maximum, so we can start another task the next week."
      
      }
      ],
      done:[{
        category:"intern",
        title:"Finish the website",
        disc:"According to the brief required, we have a lot of features to implement, so this task should be finished by this week maximum, so we can start another task the next week."
      },
      {
      category:"intern",
      title:"Finish the website",
      disc:"According to the brief required, we have a lot of features to implement, so this task should be finished by this week maximum, so we can start another task the next week."
      
      },
      {
      category:"intern",
      title:"Finish the website",
      disc:"According to the brief required, we have a lot of features to implement, so this task should be finished by this week maximum, so we can start another task the next week."
      
      }
      ]
  },
  reducers: {
    changeDrag: (state,action) => {
        state.drag =action.payload
      },
    changeType: (state,action) => {
        state.type =action.payload
      },

    addInTodoIndex: (state,action) => {
      state.todo =state.todo.splice(state.drag, 0, action.payload)
    },
    addInTodo: (state,action) => {
        state.todo =state.todo.push(action.payload)
      },
    removeInTodo:(state,action)=>{
        state.todo=state.todo.splice(action.payload, 1)
    },
    addInInProcessIndex: (state,action) => {
        state.todo =state.todo.splice(state.drag, 0, action.payload)
      },
    addInProcess: (state,action) => {
        state.todo =state.todo.push(action.payload)
    },
    removeInInProcess:(state,action)=>{
        state.todo=state.todo.splice(action.payload, 1)
    },
    addInDoneIndex: (state,action) => {
        state.todo =state.todo.splice(state.drag, 0, action.payload)
      },
    addInDone: (state,action) => {
        state.todo =state.todo.push(action.payload)
        },
    removeInDone:(state,action)=>{
        state.todo=state.todo.splice(action.payload, 1)
    },
},
})

// Action creators are generated for each case reducer function
export const { changeType,changeDrag,addInTodoIndex,addInTodo,removeInTodo,addInInProcessIndex,addInProcess,removeInInProcess,addInDoneIndex,addInDone,removeInDone } = todoSlice.actions

export default todoSlice.reducer
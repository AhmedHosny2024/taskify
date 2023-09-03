import React from 'react';
import { Container, Header, Todo } from './style';
import { Box, IconButton } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';import TodoCard from '../Card/Card'
import { Droppable } from 'react-beautiful-dnd';
import NewTask from '../Newtask/newTask';
import { useSelector } from 'react-redux';
import { UpdateInTodo, addInTodo, removeInTodo } from '../../../Redux/todoSlice';
import { useDispatch } from 'react-redux';
import { addnewtasktodo } from '../../../Redux/newtaskSlice';



export default function ToDo (props) {
  const {todo,borderColor}=props
  const newtask = useSelector(state=>state.newtask.addtodo)
  const dispatch=useDispatch()
    return (
    <Container>
      <Header>
          <Todo >To do</Todo>
          <IconButton onClick={()=>dispatch(addnewtasktodo())}>
              <AddRoundedIcon  sx={{color:"black"}}/>
          </IconButton>
      </Header>
      {newtask && <NewTask add={addInTodo} borderColor={borderColor}/>}
      <Droppable droppableId="1" key="1">
        {(droppableProvided,droppableSnapshout) => (
          <Box ref={droppableProvided.innerRef} 
          {...droppableProvided.droppableProps}>
          {todo.map((data,index) =>(
          <TodoCard data={data} borderColor="red" index={index} func={UpdateInTodo} remove={removeInTodo}/>
          ))}
          {droppableProvided.placeholder}
          </Box>
      )}
      </Droppable>
    </Container>
)};

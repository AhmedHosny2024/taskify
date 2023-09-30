import React from 'react';
import { Container, Header, Todo } from './style';
import { Box, IconButton } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';import TodoCard from '../Card/Card'
import { Droppable } from 'react-beautiful-dnd';
import NewTask from '../Newtask/newTask';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Loading from '../loading';
import { addnewtasktodo } from '../../../Redux/dataSlice';



export default function ToDo (props) {
  const {todo,borderColor,todoloading}=props
  const newtask = useSelector(state=>state.addtodo)
  const dispatch=useDispatch()
    return (
    <Container>
      <Header>
          <Todo >To do</Todo>
          <IconButton onClick={()=>dispatch(addnewtasktodo())}>
              <AddRoundedIcon  sx={{color:"black"}}/>
          </IconButton>
      </Header>
      {todoloading ? <>
        <Loading/>
        <Loading/>
      </> :
      <>
      {newtask && <NewTask  borderColor={borderColor} type="0"/>}
      <Droppable droppableId="1" key="1">
        {(droppableProvided,droppableSnapshout) => (
          <Box ref={droppableProvided.innerRef} 
          {...droppableProvided.droppableProps}
          data-testid="todo"
          sx={{height:"100%"}}
          >
          {todo?.map((data,index) =>(
          <TodoCard data={data} borderColor="red" index={index} key={data?.id} />
          ))}
          {droppableProvided.placeholder}
          </Box>
      )}
      </Droppable>
      </>
      }
      
    </Container>
)};
